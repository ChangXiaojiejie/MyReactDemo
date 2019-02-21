// 导入
import React, { Component } from 'react'

// 创建一个App类
class TodoHead extends Component {
  state = {
    name: ''
  }
  render() {
    // console.log('header', this.props)

    return (
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={this.state.name}
          onChange={this.handleChange.bind(this)}
          autoFocus
          onKeyUp={this.handAdd.bind(this)}
        />
      </header>
    )
  }
  handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }
  // 处理输入的数据
  handAdd(e) {
    if (e.keyCode === 13) {
      // console.log('添加', e.target.value)
      this.props.addTodo(e.target.value)
      this.setState({
        name: ''
      })
    }
  }
}

export default TodoHead
