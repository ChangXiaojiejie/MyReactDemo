// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 创建豆豆组件
class DouDou extends Component {
  /**
   * 更新阶段的钩子函数
   * 组件更新发生的条件：
   * 1. props的值发生改变，即父组件传来的值发生改变
   * 2. state的值发生改变，即自己state的值发生改变
   *
   * componentWillReceiveProps: 只有当接收到父组件的新的props的时候才会
   * shouldComponentUpdate   一般返回true
   * componentWillUpdate 更新前
   * render()
   * componentDidUpdate  更新后
   *
   */

  // componentWillReceiveProps 只有接收到新的父组件的返回值，才会被执行
  componentWillReceiveProps() {
    console.log('Dou：接收到新的Props的值')
  }
  // shouldComponentUpdate 需要一个返回值，返回值为true 更新当前组件，返回值为false 不能更新当前组件
  shouldComponentUpdate() {
    console.log('Dou：是否更新函数被调用')
    return true
  }
  // componentWillUpdate 更前被调用
  componentWillUpdate() {
    console.log('Dou：更新前被调用，能获取到更新前的DOM结构和数据')
  }
  // 更新的方法
  render() {
    return <p>我是豆豆，我被打了{this.props.count}次</p>
  }
  // 更新后的数据
  componentDidUpdate() {
    console.log('Dou：更新后的数据，能够获取更新后的DOM结构和最新的数据')
  }
}

// 创建打豆豆的组件
class Demo extends Component {
  /**
   * 挂载阶段的钩子函数
   *  constructor :  数据的初始化操作  函数的初始化
   *  componentWillMount ：
   *  render： 负责组件的渲染
   *  componentDidMount： 操作DOM  ajax
   */
  constructor(props) {
    super(props)
    console.warn('Demo：数据的初始化，和函数的初始化在这个阶段执行')
  }

  // 数据渲染前，此时数据还没有被渲染
  componentWillMount() {
    console.warn('Demo：数据渲染前，此时数据还没有被渲染')
  }

  state = {
    count: 0
  }
  // 渲染数据
  render() {
    console.warn('Demo：数据更新')
    return (
      <div>
        <DouDou count={this.state.count} />
        <button onClick={this.handClick.bind(this)}>打豆豆</button>
      </div>
    )
  }

  // componentDidMount数据挂载完成
  componentDidMount() {
    console.warn('Demo：此时能获取到DOM结构了')
  }

  /**
   * 更新阶段的钩子函数
   * 组件更新发生的条件：
   * 1. props的值发生改变，即父组件传来的值发生改变
   * 2. state的值发生改变，即自己state的值发生改变
   *
   * componentWillReceiveProps: 只有当接收到父组件的新的props的时候才会
   * shouldComponentUpdate   一般返回true
   * componentWillUpdate 更新前
   * render()
   * componentDidUpdate  更新后
   *
   */

  // 处理点击事件
  handClick() {
    // 使用updata的方式
    this.setState(state => ({ count: state.count + 1 }))
  }
}

// 渲染类的组件
ReactDom.render(<Demo />, document.getElementById('root'))
