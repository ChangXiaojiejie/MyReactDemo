// 评论列表案例
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 创建类组件
class Demo extends Component {
  state = {
    list: [
      { id: 1, name: '常杰', content: '我感冒了，有点难受' },
      { id: 2, name: '李想', content: '常杰，感冒好点了没' },
      { id: 3, name: '丁申阳', content: '听李想说，常杰感冒了' }
    ],
    name: '',
    content: ''
  }
  render() {
    // 先获取数组
    let list = this.state.list.map(item => (
      <li key={item.id}>
        <h3>{item.name}</h3>
        <p>{item.content}</p>
        <button onClick={this.del.bind(this, item.id)}>X</button>
      </li>
    ))
    //渲染数据
    return (
      <div>
        <h1>像介样</h1>
        <form>
          <p>
            <input
              type="text"
              value={this.state.name}
              placeholder="请输入您的名称"
              onChange={this.changeName}
            />
          </p>
          <div>
            <textarea
              value={this.state.content}
              onChange={this.changeContent}
              cols="30"
              rows="10"
              placeholder="请输入您评论的内容"
            />
          </div>
          <button onClick={this.addContent}>提交</button>
        </form>
        <ul>{list}</ul>
      </div>
    )
  }
  // 注册删除事件
  del(id) {
    // console.log('删除的数据的id为：', id)
    // 获取删除数据的索引
    let index = this.state.list.findIndex(item => item.id === id)
    // console.log('索引号为：', index)
    // 删除指定的数据
    /**
     * 1. 先将数据保存一份
     * 2. 操作备份的数据
     * 3. 将备份数据同步到state中
     */
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list
    })
    // console.log('list：', list)
  }
  // 注册添加评论事件
  addContent = e => {
    // 阻止默认行为
    e.preventDefault()

    // 获取输入框的值
    let { name, content } = this.state
    console.log(name, content)
    // 声明一个新的对象
    let newData = {
      id: +new Date(),
      name,
      content
    }
    // 将数据添加到数组中更新到到state中
    this.setState({
      list: [newData, ...this.state.list]
    })
  }
  // 输入评论人姓名
  changeName = e => {
    console.log('评论人姓名：', e.target.value)
    this.setState({
      name: e.target.value
    })
  }
  //输入评论内容
  changeContent = e => {
    // console.log('评论的内容：', e.target.value)
    // console.log('this', this)
    this.setState({
      content: e.target.value
    })
  }
}

// 渲染数据
ReactDom.render(<Demo />, document.getElementById('root'))
