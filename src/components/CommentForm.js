// 导入
import React, { Component } from 'react'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.handChange = this.handChange.bind(this)
  }
  state = {
    name: '',
    content: ''
  }
  render() {
    return (
      <form>
        <p>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handChange}
            placeholder="请输入你的常式之名"
            name="name"
          />
        </p>
        <div>
          <textarea
            value={this.state.content}
            onChange={this.handChange}
            cols="30"
            rows="10"
            placeholder="请输入内容"
            name="content"
          />
        </div>
        <button onClick={this.add.bind(this)}>发表</button>
      </form>
    )
  }
  // 修改状态的属性值
  handChange(e) {
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
    // console.log('修改了')
  }
  // 添加事件
  add(e) {
    // 阻止默认跳转
    e.preventDefault()
    // 获取输入的内容
    let { name, content } = this.state
    this.props.add(name, content)
    this.setState({
      name: '',
      content: ''
    })
  }
}

export default CommentForm
