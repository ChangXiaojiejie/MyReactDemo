// 函数组件的组件通信

// 导入
import React from 'react'
import ReactDom from 'react-dom'

// 创建实例对象
// 创建一个函数组件
function Chang({ cj, age, flag }) {
  return <div>
    我成功了耶
    <p>我的名字====>{cj}</p>
    <p>我的年龄====>{age}</p>
    <p>我的存在====>{flag ? '有效' : '无效'}</p>
  </div>
}

// 渲染数据
ReactDom.render(<Chang cj="常杰" age={18} flag={true} />, document.getElementById('root'))