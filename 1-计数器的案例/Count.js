// 导入 React
import React, { Component } from 'react'

// 导入action中的action方法
import { add, sub, addNum } from './action'

// // 导入reducer
// import render from './reducer'

// 导入store
import store from './store'

// 创建count的类
class Count extends Component {
  render() {
    return (
      <div>
        <p>我当前的值为：{store.getState()}</p>
        <button onClick={this.add.bind(this)}>+1</button>
        <button onClick={this.sub.bind(this)}>-1</button>
        <button onClick={this.addNum.bind(this, 5)}>+5</button>
      </div>
    )
  }

  // 在
  componentWillMount() {
    this.unsubscribe = store.subscribe(() => {
      // console.log('')
      console.log('状态发生了改变')
      this.forceUpdate()
    })
  }

  // 在组件销毁的时候取消订阅
  componentWillUnmount() {
    this.unsubscribe()
  }

  // 创建方法
  add() {
    // console.log('加1')
    //使用store派发任务
    store.dispatch(add())
    console.log('当前store的值：', store.getState())
  }
  sub() {
    // console.log('减1')
    store.dispatch(sub())
    console.log('当前store的值：', store.getState())
  }
  addNum(num) {
    // console.log('加' + num)
    const action = addNum(num)
    store.dispatch(action)
    console.log('当前store的值：', store.getState())
  }
}

// 导出Count类
export default Count
