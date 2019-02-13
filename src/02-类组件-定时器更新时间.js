// 类组件-定时器更新时间

// 首先创建一个类组件

// 导入
import React from 'react'
import ReactDom from 'react-dom'

// 创建一个类组件
class Clock extends React.Component {
  // 创建constructor
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  // 创建一个render的方法
  render() {
    return (
      <div>
        <h1>当前的时间是：</h1>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
  // 钩子函数
  //当Dom元素被挂载时调用
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }
  // 当Dom元素被卸载时调用
  componentWillUnmount() {
    clearInterval(this.timerId)
  }
  // 创建一个tick函数
  tick() {
    this.setState({
      date: new Date()
    })
  }
}

// 渲染数据
ReactDom.render(<Clock />, document.getElementById('root'))

// 当组件输出到 DOM 后会执行 componentDidMount() 钩子

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
