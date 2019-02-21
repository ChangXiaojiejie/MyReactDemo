// 导入
import React, { Component } from 'react'

// 创建一个App类
class TodoFooter extends Component {
  render() {
    // console.log('footer:', this.props)
    let { count, isClear, isShowFoot, clearTodo, filter, filterFn } = this.props
    if (!isShowFoot) {
      return null
    }
    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{count}</strong> item left
        </span>

        <ul className="filters">
          <li>
            <a
              className={filter === 'show_all' ? 'selected' : ''}
              href="#/"
              onClick={() => filterFn('show_all')}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="#/active"
              className={filter === 'show_active' ? 'selected' : ''}
              onClick={() => filterFn('show_active')}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="#/completed"
              className={filter === 'show_completed' ? 'selected' : ''}
              onClick={() => filterFn('show_completed')}
            >
              Completed
            </a>
          </li>
        </ul>
        {isClear ? (
          <button className="clear-completed" onClick={clearTodo}>
            Clear completed
          </button>
        ) : (
          ''
        )}
      </footer>
    )
  }
  handChange() {}
}

export default TodoFooter
