// 


// 1.导入react 和react-dom
import React from 'react'
import ReactDom from 'react-dom'

// 渲染 
{
  /* 
  <ul id="list" class="fruits">
  <li>苹果</li>
  <li>香蕉</li>
  <li>橘子</li>
  </ul> 
  */
}
// 创建react的实例对象
let li1 = React.createElement('li', {}, '苹果')
let li2 = React.createElement('li', {}, '香蕉')
let li3 = React.createElement('li', {}, '橘子')

let ul = React.createElement('ul', {
  id: 'list',
  className: 'fruits'
}, li1, li2, li3)

// 渲染数据
ReactDom.render(ul, document.getElementById('root'))