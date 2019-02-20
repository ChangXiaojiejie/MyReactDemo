// 1.导入

import { createStore } from 'redux'
import reducer from './reducer'

// 2.创建 store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// 3.导出
export default store
