// react的基本使用
// console.log('啦啦啦')

// 1. 导入react和react-dom
import React from 'react'
import ReactDom from 'react-dom'
// 2.创建一个react的对象
let element = React.createElement('div', {
  id: 'box'
}, "我是内容", '我是二号的内容')
// 3. 将这个对象渲染出来
ReactDom.render(element, document.getElementById("root"))