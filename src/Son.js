// 导入
import React, { Component } from 'react'

// 导入PropsType
import PropTypes from 'prop-types'

// 创建一个子类组件
class Son extends Component {
  // 设置static的propTypes
  static propTypes = {
    chang: PropTypes.array,
    wang: PropTypes.string
  }
  // defaultType
  static defaultProps = {
    chang: ['1', '2'],
    wang: '哈哈哈'
  }
  render() {
    return (
      <div>
        <p>父组件传值，chang属性：{this.props.chang}</p>
        <p>父组件传值，wang属性：{this.props.wang}</p>
      </div>
    )
  }
}

// 导出子组件
export default Son
