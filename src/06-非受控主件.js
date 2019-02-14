// 非受控主件

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

/**
 * 非受控组件
 * 1. 在构造函数中创建一个ref
 * 2. 在jsx对象中给组件绑定ref
 * 3. 在处理程序中，调用ref
 */

// 创建类组件
class Demo extends Component {
  constructor(props) {
    super(props)
    this.pRef = React.createRef()
  }
  render() {
    return (
      <div>
        <p ref={this.pRef}>我是一个p标签啊</p>
        <button onClick={this.clickBtn}>点击我获取p标签的内容</button>
      </div>
    )
  }
  clickBtn = e => {
    console.log(this.pRef.current.innerText)
  }
}

//渲染组件
ReactDom.render(<Demo />, document.getElementById('root'))
