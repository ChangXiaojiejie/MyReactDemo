// context的使用

/* 
  context的使用
  作用：减少父子之间的props的传递，不需要一层一层的传递props
  1. 需要创建要给context对象 ,context对象中包含了两个组件
    Provider: 提供者 
    Consumer： 消费者
  2. 使用Provider包裹需要提供数据的组件. 提供一个value属性，value传递后代的Consumer
  3. 使用Consumer包裹 任意想要接收数据的组件   接收数据的组件只要是Provider的后代


  注意点：
    1. Consumer 可以有多个
    2. Provider可以没有
    3. Provider可以有多个
*/

// 导入

import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 创建Context
let { Provider, Consumer } = React.createContext()
// 创建 父类组件
class Father extends Component {
  state = {
    color: 'red'
  }
  render() {
    return (
      <Provider value={this.state.color}>
        <div style={{ padding: 50, backgroundColor: 'pink' }}>
          我是爸爸
          <Son />
        </div>
      </Provider>
    )
  }
}

// 创建 子类组件
class Son extends Component {
  render() {
    return (
      <Consumer>
        {value => (
          <div style={{ padding: 30, backgroundColor: 'red' }}>
            我是儿子--color:{value}
            <Sun />
          </div>
        )}
      </Consumer>
    )
  }
}

// 创建 孙类组件
class Sun extends Component {
  render() {
    return (
      <Consumer>
        {value => (
          <div style={{ padding: 20, backgroundColor: 'blue', color: value }}>
            我是孙子
          </div>
        )}
      </Consumer>
    )
  }
}

// 渲染类组件
ReactDom.render(<Father />, document.getElementById('root'))
