// 将函数转换为类
// 首先创建一个函数组件的定时器

// 导入
import React from 'react'
import ReactDom from 'react-dom'

// 创建react的实例
// 创建函数组件
// function Clock({ date }) {
//   return (
//     <div>
//       <h1>当前的时间是：</h1>
//       <p>{date.toLocaleTimeString()}</p>
//     </div>
//   )
// }

// 创建一个定时器
// setInterval(() => {
//   // 渲染react的对象
//   ReactDom.render(<Clock date={new Date()} />, document.getElementById('root'))
// }, 1000)

// 你可以通过5个步骤将函数组件 Clock 转换为类

// 1.创建一个名称扩展为 React.Component 的ES6 类
class Clock extends React.Component {
  // 添加一个类构造函数来初始化状态 this.state
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }
  // 2.创建一个叫做render()的空方法
  render() {
    // 3.将函数体移动到 render() 方法中
    return (
      <div>
        <h1>当前的时间是：</h1>
        {/* 4.在 render() 方法中，使用 this.props 替换 props */}
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
// 5.删除剩余的空函数声明

//我们会通过3个步骤将 date 从属性移动到状态中：

// 1.在 render() 方法中使用 this.state.date 替代 this.props.date
// 2.添加一个类构造函数来初始化状态 this.state
// 3.从 <Clock /> 元素移除 date 属性：

// 1.在 render() 方法中使用 this.state.date 替代 this.props.date

// 2.添加一个类构造函数来初始化状态 this.state
// 3.从 <Clock /> 元素移除 date 属性：

// 添加定时器 （无效）
setInterval(() => {
  // 渲染react的对象
  ReactDom.render(<Clock />, document.getElementById('root'))
}, 1000)
