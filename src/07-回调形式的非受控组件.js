// 回调形式的非受控组件

// 非受控组件的使用

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

/**
 * 非受控组件的使用
 * 1. 直接在标签上声明ref
 * 2. 在处理程序中直接通过this.xxx调用
 *
 */

// 创建类的组件
class Demo extends Component {
  constructor(props) {
    super(props)
    // 绑定this
    this.hanldClick = this.hanldClick.bind(this)
  }
  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            ref={el => (this.inpRef = el)}
            defaultValue="我是默认值"
          />
        </p>
        <p ref={el => (this.pRef = el)}>哈哈哈，我的值能够获取到么</p>
        <button onClick={this.hanldClick}>
          点击将p标签的内容添加到输入框中
        </button>
      </div>
    )
  }
  hanldClick() {
    this.inpRef.value = this.pRef.innerText
  }
}

// 渲染类的组件
ReactDom.render(<Demo />, document.getElementById('root'))
