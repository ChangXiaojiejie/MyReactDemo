// 导入
import React, { Component } from 'react'

// 导入 CommentForm 和 CommentList
import CommentForm from './CommentForm'
import CommentList from './CommentList'

class Comment extends Component {
  state = {
    list: [
      { id: 1, name: '常传强', content: '今年过年不回去了，祝大家新年快乐' },
      {
        id: 2,
        name: '常李超',
        content: '家乐，在家要听爷爷奶奶的话，等放暑假带你到深圳来玩'
      },
      { id: 3, name: '常涛', content: '四世同堂，其乐融融' },
      { id: 4, name: '常伟', content: '我就是那匹自由自在，桀骜不驯的狼' },
      { id: 5, name: '常志成', content: '开车不喝酒，喝酒不开车' },
      {
        id: 6,
        name: '常杰',
        content:
          '逆光而行，只留下背影，一个人的日子，云淡风轻，我是常杰，我只为自己代言'
      }
    ]
  }
  render() {
    return (
      <div>
        <h1>常家大院论坛</h1>
        <CommentForm add={this.add.bind(this)} />
        <CommentList list={this.state.list} del={this.del.bind(this)} />
      </div>
    )
  }
  // 删除的方法
  del(id) {
    // 获取删除的评论的下标
    let index = this.state.list.findIndex(item => item.id === id)
    // 将当前的list数据备份
    let list = [...this.state.list]
    // 删除指定下标下的评论数据
    list.splice(index, 1)
    // 将数据同步到state中
    this.setState({
      list
    })
  }
  // 添加的方法
  add(name, content) {
    // 创建一个新的评论对象
    let newData = {
      id: +new Date(),
      name,
      content
    }
    // 将数据更新到state中
    this.setState({
      list: [newData, ...this.state.list]
    })
  }
}

export default Comment
