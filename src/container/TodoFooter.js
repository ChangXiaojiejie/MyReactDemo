// 导入

// 导入 connect
import { connect } from 'react-redux'

// 导入actions中的方法
import { clearTodo, filter } from '../actions'

// 导入渲染容器的数据
import TodoFooter from '../components/TodoFooter'
//将state中的数据映射到Props中
const mapStateToProps = ({ todos, filter }) => {
  return {
    count: todos.filter(item => !item.completed).length,
    isClear: todos.some(item => item.completed),
    isShowFoot: todos.length > 0,
    filter
  }
}
// 将派发任务到Props中
const mapPatchToProps = disptch => ({
  clearTodo() {
    disptch(clearTodo())
  },
  filterFn(value) {
    disptch(filter(value))
  }
})
export default connect(
  mapStateToProps,
  mapPatchToProps
)(TodoFooter)
