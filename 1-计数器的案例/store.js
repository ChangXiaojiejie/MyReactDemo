// 导入

// 1.导入redux和reducer
import { createStore } from 'redux'

import reducer from './reducer'

// 2.定义一个store
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
// 3.导出
export default store
