// 创建一个store

// 1.导入
import { createStore } from 'redux'
import reducer from '../reducer'

// 2.创建
let store = createStore(
  reducer,
  JSON.parse(localStorage.getItem('todos')) || [],
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// 订阅
store.subscribe(() => {
  localStorage.setItem('todos', JSON.stringify(store.getState()))
})

// 3.导出
export default store
