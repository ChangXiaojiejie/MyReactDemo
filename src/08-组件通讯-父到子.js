// 组件通讯-父到子

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 创建 父类组件
class Father extends Component {
  state = {
    money: 100000000,
    car: {
      brand: '玛莎拉蒂',
      price: '$999999999'
    }
  }
  render() {
    return (
      <div style={{ padding: 50, backgroundColor: 'pink' }}>
        我是父类
        <Son money={this.state.money} car={this.state.car} />
      </div>
    )
  }
}

// 创建子类组件
class Son extends Component {
  state = {}
  render() {
    return (
      <div style={{ padding: 20, backgroundColor: 'red' }}>
        我是子类 ==>money：{this.props.money}====>car：-->品牌：
        {this.props.car.brand}--->价格：{this.props.car.price}
      </div>
    )
  }
}

// 渲染类组件
ReactDom.render(<Father />, document.getElementById('root'))
