// 导入
import React, { Component } from 'react'

// 导入PropsType
import PropTypes from 'prop-types'

// 创建一个Demo类
class Demo extends Component {
  render() {
    return (
      <div>
        我是Demo，接收到Father传来的text值：{this.props.text}
        <p>我是Demo，Father传递来的name值为：{this.props.name}</p>
      </div>
    )
  }
}

// 创建一个类型检查Props
Demo.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string.isRequired
}

// 创建默认值
Demo.defaultProps = {
  name: '我是默认值'
}
/**
 * 实现校验的方式：
 * 1. 导入Propstype
 * 2. 创建一个类型检查Props
 *
 */

// 导入
export default Demo
