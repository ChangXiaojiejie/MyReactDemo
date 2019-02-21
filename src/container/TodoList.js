// 使用connect
import { connect } from 'react-redux'

// 导入 action
import { delTodo, changeStatus, changeName } from '../actions'

// 导入TodoFooter
import TodoList from '../components/TodoList'

// 处理获取数据’
function filterList(todos, filter) {
  // console.log('state：', todos)
  if (filter === 'show_active') {
    return todos.filter(item => !item.completed)
  } else if (filter === 'show_completed') {
    return todos.filter(item => item.completed)
  } else {
    return todos
  }
}

// 将当前的数据映射到Props中
const mapStateToProps = state => {
  return {
    list: filterList(state.todos, state.filter)
  }
}

const mapPatchToProps = dispatch => ({
  // 派发删除任务
  delTodo(id) {
    dispatch(delTodo(id))
  },
  // 派发修改状态
  changeStatus(id) {
    dispatch(changeStatus(id))
  },
  // 派发修改任务名称的事件
  changeName(id, name) {
    dispatch(changeName(id, name))
  }
})

// 导出App
export default connect(
  mapStateToProps,
  mapPatchToProps
)(TodoList)
