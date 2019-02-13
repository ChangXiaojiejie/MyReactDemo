// 定时器案例-函数组件

// 导入
import React from 'react'
import ReactDom from 'react-dom'


// 创建react的实例对象
function Clock({ date }) {
  // console.log('props：', props)
  return (
    <div>
      <h1>当前的时间</h1>
      <p>{date.toLocaleString()}</p>
    </div>
  )
}

//使用定时器
setInterval(() => {
  //渲染数据
  ReactDom.render(<Clock date={new Date()} />, document.getElementById('root'))
}, 1000)