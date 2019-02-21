// 导入
import React, { Component } from 'react'

// 导入子组件
import TodoHead from './container/TodoHead'
import TodoList from './container/TodoList'
import TodoFooter from './container/TodoFooter'

// 创建一个App类
class App extends Component {
  render() {
    return (
      <section className="todoapp">
        <TodoHead />
        <TodoList />
        <TodoFooter />
      </section>
    )
  }
}

// 导出App
export default App
