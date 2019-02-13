// 将函数转成类的过程
/**
 * 1. 创建一个类为Clock，继承于 React.Component
 * 2. 创建一个render方法，返回react的对象
 * 3. 在render中将props.date替换成 this.state.date
 * 4. 在类的原型上添加一个方法 this.state = {date: new Date()}
 * 5. 渲染数据，移除组件身上的date属性
 */

// // 将生命周期方法添加到类中步骤
/**
 * 1. 声明两个生命周期函数 componentDidMount 和 componentWillUnmount
 * 2. 在componentDidMount生命周期函数中，设置一个定时器，在定时器中调用了类的tick方法
 * 3. 声明一个tick的方法，在方法中更新当前state中的date属性值
 * 4. 在componentWillUnmount中清除定时器
 */

// 导入
import React from 'react'
import ReactDom from 'react-dom'
import { setInterval } from 'timers'

// 创建类的组件
class Clock extends React.Component {
  // 在原型上添加方法
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  // 渲染
  render() {
    // 返回的是react的对象
    return (
      <div>
        <h1>当前的时间为：</h1>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
  // 创建生命周期函数
  // 挂载Dom时调用
  componentDidMount() {
    // 创建定时器
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  // 卸载Dom时调用
  componentWillUnmount() {
    // 清除定时器
    clearInterval(this.timerId)
  }

  // tick是更新state中date的方法
  tick() {
    this.setState({
      date: new Date()
    })
  }
}

//渲染
ReactDom.render(<Clock />, document.getElementById('root'))
