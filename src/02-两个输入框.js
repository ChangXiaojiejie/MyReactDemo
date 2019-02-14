// 实现两个输入框
import React, { Component } from 'react'
import ReactDom from 'react-dom'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

// 我们可以通过从 Calculator 组件中抽离一个 TemperatureInput 组件出来。我们也会给它添加一个值为 c 或 f 的表示温度单位的 scale 属性。
class TemperatureInput extends Component {
  state = {
    temperature: ''
  }
  handleChange(e) {
    this.setState({
      temperature: e.target.value
    })
  }
  render() {
    const temperature = this.state.temperature
    const scale = this.props.scale
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange.bind(this)} />
      </fieldset>
    )
  }
}
class Calculator extends Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }
}

ReactDom.render(<Calculator />, document.getElementById('root'))
