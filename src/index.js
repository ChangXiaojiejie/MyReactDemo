// 导入
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 导入样式
import './index.css'

class Book extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }

  // 组件挂载好了的时候会触发
  // 发送请求获取数据
  componentDidMount() {
    this.renderFn()
  }
  // 渲染的函数
  async renderFn() {
    let res = await fetch('http://localhost:9999/getBookList')
    let { list } = await res.json()
    // console.log('data：', list)
    // 将数据保存到state中
    this.setState({
      list
    })
  }

  // 注册事件
  async del(id) {
    // console.log('点击呢', id)
    // 发送删除的请求
    let res = await fetch(`http://localhost:9999/deleteBook?id={id}`)
    let { status } = await res.json()
    if (status === 200) {
      this.renderFn()
    }
    // console.log('deldata：', data)
  }
  render() {
    return (
      <div className="container">
        <div className="form">
          <p>
            书名：
            <input type="text" />
          </p>
          <p>
            描述：
            <input type="text" />
          </p>

          <button>保存</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>编号</th>
              <th>书名</th>
              <th>描述</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>
                  <button onClick={this.del.bind(this, item.id)} href="#">
                    删除
                  </button>
                  |<button href="#">修改</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<Book />, document.getElementById('root'))
