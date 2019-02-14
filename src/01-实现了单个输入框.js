// 实现一个温度计算器
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 我们先创建一个名为 BoilingVerdict 的组件。它会接受 celsius 这个温度变量作为它的 props 属性，最后根据温度判断返回内容：

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>我沸腾了</p>
  } else {
    return <p>我距离沸腾还差一点点</p>
  }
}

// 接下来，我们写一个名为 Calculator 的组件。它会渲染一个 <input> 来接受用户输入，然后将输入的温度值保存在 this.state.temperature 当中。
class Calculator extends Component {
  // 状态处理
  state = {
    temperature: ''
  }
  // 处理输入的函数
  handleChange(e) {
    // console.log('输入的值为：', e.target.value)
    this.setState({
      temperature: e.target.value
    })
  }
  // 渲染的函数
  // 之后呢，它会根据输入的值渲染出 BoilingVerdict 组件。
  render() {
    const temperature = this.state.temperature
    return (
      <fieldset>
        <legend>输入一个摄氏温度</legend>
        <input value={temperature} onChange={this.handleChange.bind(this)} />

        <BoilingVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    )
  }
}

ReactDom.render(<Calculator />, document.getElementById('root'))
