// 组件通讯-子到父

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 创建 父类组件
class Father extends Component {
  state = {
    money: ''
  }
  render() {
    return (
      <div style={{ padding: 50, backgroundColor: 'pink' }}>
        我儿子给了{this.state.money}元
        <Son getMoney={this.getMoney.bind(this)} />
      </div>
    )
  }
  getMoney(money) {
    // console.log('')
    this.setState({
      money
    })
  }
}

// 创建子类组件
class Son extends Component {
  state = {
    money: 100000000
  }
  render() {
    return (
      <div style={{ padding: 20, backgroundColor: 'red' }}>
        我是子类
        <button onClick={this.hanldClick.bind(this)}>给老爸打钱</button>
      </div>
    )
  }
  // 绑定事件
  hanldClick() {
    // 调用父元素的方法
    this.props.getMoney(this.state.money)
  }
}

// 渲染类组件
ReactDom.render(<Father />, document.getElementById('root'))
