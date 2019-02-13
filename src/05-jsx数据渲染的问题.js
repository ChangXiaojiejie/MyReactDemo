/* 
  05-jsx数据渲染的问题
  1. 在jsx中可以使用任意的表达式，前提是，表达式要包裹在{}中
  2. 在jsx中还可以调用方法
  3. 不能出现语句
*/
// 1.导入react
import React from 'react'
import ReactDom from 'react-dom'

// 2.声明一个react的对象
let msg = "常杰"
function name() {
  console.log('我是一个方法')
}
let element =
  (
    <div> {msg}
      <p>{1 + 1}</p>
      <p>{name()}</p>
      {/* <p>{for(var i=0;i<10;i++)}</p> */}
    </div>
  )

// 3.渲染数据
ReactDom.render(element, document.getElementById('root'))