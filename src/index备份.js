// 评论列表
// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 导入样式
import './index.css'

// 创建一个类的组件
class Demo extends Component {
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
    ],
    name: '',
    content: ''
  }
  // 删除的评论
  del(id) {
    // console.log('id：', id)
    // 获取删除的评论的下标
    let index = this.state.list.findIndex(item => item.id === id)
    // console.log('index：', index)
    // 通过拓展运算符将数组重新保存一份
    let list = [...this.state.list]
    // 操作新的数组
    list.splice(index, 1)
    // 再将数组中的数据同步到state中
    this.setState({
      list
    })
  }
  // 添加评论
  add = e => {
    // 阻止事件的默认行为
    e.preventDefault()
    // 将输入的数据添加的数组中
    // 获取输入的数据
    let { name, content } = this.state

    //创建新的数据对象
    let newData = {
      id: +new Date(),
      name,
      content
    }
    // 将新的数据对象添加到list数组中
    this.setState({
      list: [newData, ...this.state.list],
      name: '',
      content: ''
    })
  }
  // 输入用户名
  inputName = e => {
    // console.log('e：', e.target.value)
    // 将输入框中的数据更新到state中
    this.setState({
      name: e.target.value
    })
  }
  //输入评论内容
  inputContent = e => {
    // console.log('e：', e.target.value)
    this.setState({
      content: e.target.value
    })
  }
  render() {
    return (
      <div>
        <h1>常家大院论坛</h1>
        <form>
          <p>
            <input
              type="text"
              placeholder="请输入你的常式之名"
              value={this.state.name}
              onChange={this.inputName}
            />
          </p>
          <div>
            <textarea
              cols="30"
              rows="10"
              placeholder="请输入内容"
              value={this.state.content}
              onChange={this.inputContent}
            />
          </div>
          <button onClick={this.add}>发表</button>
        </form>
        <ul>
          {this.state.list.map(item => (
            <li key={item.id} className="item">
              <h3>{item.name}</h3>
              <p>{item.content}</p>
              <button onClick={this.del.bind(this, item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

// 渲染组件
ReactDom.render(<Demo />, document.getElementById('root'))
