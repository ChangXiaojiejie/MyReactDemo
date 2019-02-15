// Props传值的类型检查

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 导入Demo
import Demo from './Demo'

// 创建Father组件
class Father extends Component {
  render() {
    return (
      <div>
        我是父组件
        <Demo text="哈哈哈" />
      </div>
    )
  }
}

ReactDom.render(<Father />, document.getElementById('root'))
