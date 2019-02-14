// 导入
import React, { Component } from 'react'

// 导入样式
import './CommentList.css'

class CommentList extends Component {
  render() {
    return (
      <ul>
        {this.props.list.map(item => (
          <li key={item.id} className="item">
            <h3>{item.name}</h3>
            <p>{item.content}</p>
            <button onClick={this.handClick.bind(this, item.id)}>X</button>
          </li>
        ))}
      </ul>
    )
  }
  // 点击事件
  handClick(id) {
    this.props.del(id)
  }
}
export default CommentList
