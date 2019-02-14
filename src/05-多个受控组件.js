// 多个受控组件

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 创建类的组件对象
class Demo extends Component {
  // 在构造函数中指定this的指向
  constructor(props) {
    super(props)
    this.hanldChange = this.hanldChange.bind(this)
  }

  // 创建一个state的状态的管理
  state = {
    name: '',
    desc: '',
    city: 2
  }
  render() {
    return (
      <div>
        <p>
          <input
            type="text"
            placeholder="请输入姓名"
            value={this.state.name}
            onChange={this.hanldChange}
            name="name"
          />
        </p>
        <div>
          <textarea
            cols="30"
            rows="10"
            value={this.state.desc}
            placeholder="请输入你的描述信息"
            onChange={this.hanldChange}
            name="desc"
          />
        </div>
        <div>
          <select
            value={this.state.city}
            onChange={this.hanldChange}
            name="city"
          >
            <option value="1">河东</option>
            <option value="2">河南</option>
            <option value="3">河中</option>
            <option value="4">河西</option>
            <option value="5">河北</option>
          </select>
        </div>
      </div>
    )
  }
  hanldChange(e) {
    // console.log('被调用了')
    // console.log('e：', e.target.name)
    let { name, value } = e.target
    this.setState({
      [name]: value
    })
  }
}

// 渲染类组件的对象
ReactDom.render(<Demo />, document.getElementById('root'))
