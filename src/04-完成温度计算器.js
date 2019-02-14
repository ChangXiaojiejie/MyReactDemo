// 完成温度计算器
import React, { Component } from 'react'
import ReactDom from 'react-dom'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

// 转换函数

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

// 函数组件
function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>我沸腾了</p>
  } else {
    return <p>我距离沸腾还差一点点</p>
  }
}

// 我们可以通过从 Calculator 组件中抽离一个 TemperatureInput 组件出来。我们也会给它添加一个值为 c 或 f 的表示温度单位的 scale 属性。
class TemperatureInput extends Component {
  state = {
    temperature: ''
  }
  handleChange(e) {
    // this.setState({
    //   temperature: e.target.value
    // })
    this.props.onTemperatureChange(e.target.value)
  }
  render() {
    // const temperature = this.state.temperature
    const temperature = this.props.temperature
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
  state = {
    temperature: '',
    scale: 'c'
  }

  //方法
  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature })
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature })
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius =
      scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit =
      scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange.bind(this)}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange.bind(this)}
        />

        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}

ReactDom.render(<Calculator />, document.getElementById('root'))
