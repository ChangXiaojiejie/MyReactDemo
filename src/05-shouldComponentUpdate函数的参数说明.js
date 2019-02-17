import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 子组件更新的条件： 1. props发生了改变  2. state发生了改变
// 父组件的只要render执行了，子组件的render也会执行。
class Child extends Component {
  // 如果访问this.props，访问的更新前的数据，  接收一个参数
  // nextProps: 最新的数据
  shouldComponentUpdate(nextProps, nextState) {
    // 只要list发生了改变，就需要更新  list如果没有发生改变就不需要更新
    // console.log(this.props)
    // console.log(nextProps)
    // 如果之前的list和 最新的list没有发生改变
    if (nextProps.list === this.props.list) {
      return false
    }
    return true
  }
  render() {
    console.warn('Child组件的render函数.....')
    return (
      <ul>
        {this.props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )
  }
}
class Demo extends Component {
  state = {
    list: [],
    name: ''
  }
  render() {
    console.log('父组件的render函数执行了.....')
    return (
      <div>
        <p>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handChange.bind(this)}
          />
        </p>
        <button onClick={this.add.bind(this)}>添加</button>
        <Child list={this.state.list} />
      </div>
    )
  }
  // 处理更新的数据
  handChange(e) {
    this.setState({ name: e.target.value })
  }
  // 处理添加到list中的方法
  add() {
    this.setState(
      state => ({ list: [...state.list, state.name] }),
      () => {
        this.setState({
          name: ''
        })
      }
    )
  }
}

ReactDOM.render(<Demo />, document.getElementById('root'))
