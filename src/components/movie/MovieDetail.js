import React from 'react'
import './movieDetail.css'
import { Layout, Row, Col, Button, Icon, Spin, Alert } from 'antd'

export default class MovieDetail extends React.Component {
  state = {
    detail: {},
    isLoading: true
  }
  //进入页面发送请求
  async componentDidMount() {
    let res = await fetch(`/subject/${this.props.match.params.id}`)
    let data = await res.json()
    console.log('data：', data)
    this.setState({
      detail: data,
      isLoading: false
    })
  }

  render() {
    let { detail, isLoading } = this.state
    if (isLoading) {
      return (
        <Spin tip="加载中...">
          <Alert
            message="温馨提示"
            description="网页正在疯狂的加载中...."
            type="info"
          />
        </Spin>
      )
    }
    return (
      <Layout className="movie_detail">
        <Button type="primary" onClick={() => this.props.history.goBack()}>
          <Icon type="left" />
          返回电影列表
        </Button>
        <h1 style={{ textAlign: 'center' }}>{detail.title}</h1>
        <img
          src={detail.images.large}
          alt=""
          style={{ display: 'block', width: 270, margin: '0 auto' }}
        />
        <h3>主要演员：</h3>
        <Row>
          <Col span={12}>
            <ul className="img_list">
              {detail.casts.map(item => (
                <li key={item.id}>
                  <img src={item.avatars.small} alt="" style={{ width: 100 }} />
                  <p style={{ textAlign: 'center' }}>{item.name}</p>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        <h3>剧情介绍：</h3>
        <p style={{ textIndent: '2em' }}>{detail.summary}</p>
      </Layout>
    )
  }
}
