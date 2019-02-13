// 函数组件

// 导入
import React from 'react'
import ReactDom from 'react-dom'

// 创建实例对象
// 创建一个函数的组件
function Chang() {
  return (
    <div>我是函数组件的div
      <p>
        我是函数组件的P标签
      </p>
    </div>
  )
}

// 渲染数据
ReactDom.render(<div><Chang /> <Chang /></div>, document.getElementById('root'))
