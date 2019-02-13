// jsx语法的注意点

// 1.导入react和 react-dom
import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

// 2.创建一个react的对象
// 2.1使用div的写法
// let element = ( 
//   <div >
//     <div > 我是div </div>
//     <p> 我还是一个标签的时候 </p>
//   </div >
// )
// 2.2使用幽灵节点的
// let element = 
//   (
//     <>
//       <div > 我是div </div>
//       <p> 我还是一个标签的时候 </p>
//     </>
//   )
// 2.3使用片段标签
let element =
  (
    <Fragment>
      <div>我是div </div>
      <p> 我还是一个标签的时候</p>
    </Fragment>
  )
// 3.渲染数据
ReactDom.render(element, document.getElementById('root'))