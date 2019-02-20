// 导入
import React from 'react'
import ReactDOM from 'react-dom'

// 导入Count组件
import Count from './Count'

// 导入store
import store from './store'

// 1.导入Provider
import { Provider } from 'react-redux'

// redux管理数据
// react-redux
//   1. 需要安装 react-redux
//   2. react-redux中提供了一个组件， Provider, 我们需要使用Provider包裹我们的组件，
//   将来Provider中所有的子组件都能够获取到store数据
//   3. 给Provider组件传入一个store属性

// 渲染count组件
ReactDOM.render(
  <Provider store={store}>
    <Count />
  </Provider>,
  document.getElementById('root')
)
