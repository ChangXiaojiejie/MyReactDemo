// 导入
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// 导入store
import store from './store'

// 导入样式
import './index.css'
import './base.css'

// 导入App
import App from './App'

// 渲染App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
