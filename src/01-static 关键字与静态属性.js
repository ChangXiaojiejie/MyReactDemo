// static 关键字与静态属性

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 导入子组件
import Son from './Son.js'
// 创建类组件
class Father extends Component {
  render() {
    return (
      <div>
        <p>我是父组件</p>
        <Son />
      </div>
    )
  }
}

// 渲染类组件
ReactDom.render(<Father />, document.getElementById('root'))
