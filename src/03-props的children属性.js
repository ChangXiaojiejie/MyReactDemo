// props的children属性
/**
 *  children的用法
 * 1. 首先在组件中填写内容
 * 2. 如果使用的值不只一个，使用自定义属性
 *
 * 注意点：
 *  this.props.children 只能获取到组件双标签内的数据
 *  其他的数据通过this.props.自定义属性获取
 */

// 导入
import React, { Component } from 'react'
import ReactDom from 'react-dom'

// 创建子类组件
class Son extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.title}</h4>
        <p>{this.props.children}</p>
      </div>
    )
  }
}

// 创建父类组件
class Father extends Component {
  render() {
    return (
      <div>
        <Son title="问句">你确定不理我了么</Son>
        <Son title="自嘲">我是一个快乐的大傻瓜</Son>
      </div>
    )
  }
}

// 渲染类组件
ReactDom.render(<Father />, document.getElementById('root'))
