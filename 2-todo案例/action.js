// 导出方法
export const addTodo = name => ({
  type: 'ADD_TODO',
  name
})
export const delTodo = id => ({
  type: 'DEL_TODO',
  id
})
