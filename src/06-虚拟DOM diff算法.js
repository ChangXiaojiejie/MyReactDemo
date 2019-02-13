// 虚拟DOM diff算法
// 导入
import React from 'react'
import ReactDom from 'react-dom'



// 使用定时器
setInterval(() => {
  // 创建实例对象
  let element = (
    <div className="chang">
      <h1>当前的时间</h1>
      <p>{new Date().toLocaleString()}</p>
    </div>
  )

  // 渲染数据
  ReactDom.render(element, document.getElementById('root'))
}, 1000)