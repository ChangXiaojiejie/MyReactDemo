// 导入
import React, { Component } from 'react'

// 创建一个App类
class TodoList extends Component {
  state = {
    editID: -1
  }
  render() {
    // console.log('this.props', this.props)
    let { list, delTodo, changeStatus } = this.props
    if (!list) {
      return null
    }
    return (
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {list.map(item => (
            // completed
            <li
              className={[
                item.completed ? 'completed' : '',
                this.state.editID === item.id ? 'editing' : ''
              ].join(' ')}
              key={item.id}
            >
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  onClick={() => changeStatus(item.id)}
                  defaultChecked={item.completed ? 'checked' : ''}
                />
                <label onDoubleClick={this.changeName.bind(this, item.id)}>
                  {item.name}
                </label>
                <button className="destroy" onClick={() => delTodo(item.id)} />
              </div>
              <input
                className="edit"
                onKeyUp={this.handleUpdate.bind(this, item.id)}
                defaultValue={item.name}
              />
            </li>
          ))}
        </ul>
      </section>
    )
  }
  // changeName处理修改名称
  changeName(id) {
    // console.log('id：', id)
    this.setState({
      editID: id
    })
  }
  handleUpdate(id, e) {
    if (e.keyCode === 13) {
      this.props.changeName(id, e.target.value)
      this.setState({
        editID: -1
      })
    }
  }
}

// 导出App
export default TodoList
