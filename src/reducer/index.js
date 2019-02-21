import { combineReducers } from 'redux'
// 导出一个reducer

// let todoList = [
//   { id: 1, name: '吃饭', completed: false },
//   { id: 2, name: '睡觉', completed: true },
//   { id: 3, name: '打豆豆', completed: false },
//   { id: 4, name: '听歌', completed: true }
// ]

function todos(state = [], action) {
  switch (action.type) {
    // 处理添加
    case 'TODO_ADD':
      let newTodo = {
        id: +new Date(),
        name: action.name,
        completed: false
      }
      return [newTodo, ...state]

    // 处理删除
    case 'TODO_DEL':
      // console.log('处理了删除', action.id)
      return state.filter(item => item.id !== action.id)

    // 处理修改状态
    case 'TODO_CHANGE':
      return state.map(item => {
        if (item.id !== action.id) {
          return item
        } else {
          return { ...item, completed: !item.completed }
        }
      })

    // 处理修改任务名称
    case 'TODO_CHANGE_NAME':
      return state.map(item => {
        if (item.id !== action.id) {
          return item
        } else {
          return { ...item, name: action.name }
        }
      })
    // 处理已完成的
    case 'TODO_CLEAR':
      return state.filter(item => !item.completed)
    // 处理默认值
    default:
      return state
  }
}

function filter(state = 'show_all', action) {
  if (action.type === 'FILTER') {
    return action.value
  }
  return state
}

let rootReducer = combineReducers({
  todos,
  filter
})

export default rootReducer
