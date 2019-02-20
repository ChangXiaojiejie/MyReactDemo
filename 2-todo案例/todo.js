// 导入
import React, { Component } from 'react'

// 导入action
import { addTodo, delTodo } from './action'

// 导入store
import store from './store'

// 创建todo
class Todo extends Component {
  state = {
    name: ''
  }
  // 一进入页面订阅
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      console.log('强制刷新')
      this.forceUpdate()
    })
  }
  // 组件销毁时取消订阅
  componentWillUnmount() {
    this.unsubscribe()
  }
  // 处理输入的内容
  handChang(e) {
    this.setState({
      name: e.target.value
    })
  }
  // 处理添加的操作
  add() {
    // console.log('添加的内容为', this.state.name)
    // 使用store派发任务
    store.dispatch(addTodo(this.state.name))
    // 将输入框的值清空
    this.setState({
      name: ''
    })
  }

  //删除任务
  del(id) {
    store.dispatch(delTodo(id))
  }

  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handChang.bind(this)}
          />
          <button onClick={this.add.bind(this)}>添加</button>
        </p>
        <ul>
          {store.getState().map(item => (
            <li key={item.id} onDoubleClick={this.del.bind(this, item.id)}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// 导出
export default Todo
