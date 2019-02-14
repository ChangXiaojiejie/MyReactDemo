// 非受控组件的使用

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

/**
 * 非受控组件的使用
 * 1. 在构造函数中创建ref
 * 2. 绑定ref
 * 3. 调用ref中的current
 */

// 创建类的组件
class Demo extends Component {
  constructor(props) {
    super(props)
    // 绑定this
    this.hanldClick = this.hanldClick.bind(this)
    // 创建输入框的ref
    this.inpRef = React.createRef()
    // 创建p标签的ref
    this.pRef = React.createRef()
  }
  render() {
    return (
      <div>
        <p>
          <input type="text" ref={this.inpRef} defaultValue="我是默认值" />
        </p>
        <p ref={this.pRef}>哈哈哈，我的值能够获取到么</p>
        <button onClick={this.hanldClick}>
          点击将p标签的内容添加到输入框中
        </button>
      </div>
    )
  }
  hanldClick() {
    // console.log('你点击了')
    // console.log('获取到输入框中的值', this.inpRef.current.value)
    // console.log('获取到p标签中的值', this.pRef.current.innerText)
    this.inpRef.current.value = this.pRef.current.innerText
  }
}

// 渲染类的组件
ReactDom.render(<Demo />, document.getElementById('root'))
