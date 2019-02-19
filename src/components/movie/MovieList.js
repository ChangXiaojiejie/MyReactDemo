// 导入
import React, { Component } from 'react'
import { Card, Rate, Spin, Alert, Pagination } from 'antd'

// 导入样式
import './MovieList.css'

// 创建
class MovieList extends Component {
  state = {
    list: [],
    total: 0,
    isLoading: true,
    currPage: +this.props.match.params.id || 1,
    pageSize: 5,
    type: this.props.match.params.type,
    isfirestLoading: true
  }
  componentWillMount() {
    // console.log('发送请求获取数据')
    this.getMovieList()
    // console.log('this.props:', this.props)
  }
  componentWillReceiveProps(nextProps) {
    let { isfirestLoading } = this.state
    if (isfirestLoading) {
      return
    }
    // console.log('nextProps', nextProps)
    this.setState(
      {
        currPage: +nextProps.match.params.id || 1,
        isLoading: true,
        type: nextProps.match.params.type
      },
      () => {
        this.getMovieList()
      }
    )
  }
  // 获取电影列表
  async getMovieList() {
    let { currPage, pageSize } = this.state
    let start = (currPage - 1) * pageSize
    let type = this.props.match.params.type
    let res = await fetch(`/${type}?start=${start}&count=${pageSize}&city=上海`)
    let { subjects, total } = await res.json()
    // console.log('data：', subjects)
    this.setState({
      list: subjects,
      total: +total,
      isLoading: false,
      isfirestLoading: false
    })
  }

  // 跳转到详情页面
  goDefault(id) {
    this.props.history.push(`/movie/detail/${id}`)
  }

  renderFn() {
    // console.log('render:', this.state)
    let { list } = this.state

    return list.map(item => (
      <Card
        hoverable
        onClick={this.goDefault.bind(this, item.id)}
        key={item.id}
        cover={<img alt="example" src={item.images.small} />}
      >
        <h3>{item.title}</h3>
        <p>电影类型：{item.genres.join()}</p>
        <p>上映年份：{item.year}</p>
        <Rate
          defaultValue={Math.round(item.rating.average) / 2}
          disabled
          allowHalf
        />
      </Card>
    ))
  }
  // 修改页码
  changePage(page, pageSize) {
    // console.log('页码改变了', page, pageSize)
    // this.setState(
    //   {
    //     currPage: page,
    //     isLoading: true
    //   },
    //   () => {
    //     this.getMovieList()
    //   }
    // )
    this.props.history.push(`/movie/${this.state.type}/${page}`)
  }

  render() {
    let { isLoading, currPage, pageSize, total } = this.state

    // console.log('this.props:', this.props)
    // 判断是否开启加载
    if (isLoading) {
      return (
        <Spin tip="加载中...">
          <Alert
            message="温馨提醒"
            description="电影正在拼命来的路上....."
            type="info"
          />
        </Spin>
      )
    }
    return (
      <div>
        <div className="movie_list">{this.renderFn()}</div>
        <Pagination
          defaultCurrent={currPage}
          defaultPageSize={pageSize}
          total={total}
          onChange={this.changePage.bind(this)}
        />
      </div>
    )
  }
}

//导出
export default MovieList
