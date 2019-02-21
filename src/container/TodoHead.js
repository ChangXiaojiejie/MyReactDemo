import { connect } from 'react-redux'

// 导入actions的方法
import { addTodo } from '../actions'

// 导入 todoHeader
import TodoHead from '../components/TodoHead'

// 导出App

// 创建一个
const mapPatchToProps = dispatch => ({
  addTodo(name) {
    dispatch(addTodo(name))
  }
})
export default connect(
  null,
  mapPatchToProps
)(TodoHead)
