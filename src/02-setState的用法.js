/* 
  setState()
    作用： 修改react组件中state数据，并且会通知对应的组件进行更新
  1. react中的state的数据不允许直接修改的，必须调用setState
  2. react中setState是异步的方法，想要获取最终的结果，需要提供回调函数
  3. setState的第一个参数还允许是一个函数

*/
// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 创建类的组件
class Demo extends Component {
  state = {
    count: 0
  }
  render() {
    return (
      <div>
        <p>我是豆豆，我被打了{this.state.count}次</p>
        <button onClick={this.handClick.bind(this)}>打豆豆</button>
      </div>
    )
  }
  // 处理点击事件
  handClick() {
    // 形成了回调地狱
    // this.setState(
    //   {
    //     count: this.state.count + 1
    //   },
    //   () => {
    //     this.setState({
    //       count: this.state.count + 1
    //     })
    //   }
    // )

    // 使用updata的方式
    this.setState(state => ({ count: state.count + 1 }))
    this.setState(state => ({ count: state.count + 1 }))
  }
}

// 渲染类的组件
ReactDom.render(<Demo />, document.getElementById('root'))
