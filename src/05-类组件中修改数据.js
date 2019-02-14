// 类组件中修改数据

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 创建react的实例
class Demo extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {}
  // }
  // react的状态(数据)
  state = {
    msg: ''
  }
  // render方法
  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            value={this.state.msg}
            placeholder="请输入您的数据"
            onChange={this.changeInput}
          />
        </p>
        <p>input：{this.state.msg}</p>
      </div>
    )
  }
  // 注册input的方法
  changeInput = e => {
    // console.log('e：', e.target.value)
    this.setState({
      msg: e.target.value
    })
  }
}

// 渲染数据
ReactDom.render(<Demo />, document.getElementById('root'))
