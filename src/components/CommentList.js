// 导入
import React, { Component } from 'react'

// 导入PropsType
import PropTypes from 'prop-type'

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

// 创建类组件的类型检查
CommentList.propTypes = {
  name: PropTypes.string
}

export default CommentList

/**
 * 使用类型检查的步骤
 * 1. 导入 PropTypes
 * 2. 创建类型检查
 *
 *
 */
