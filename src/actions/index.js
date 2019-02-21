// 提供一个方法
// 添加一个todo
export const addTodo = name => ({
  type: 'TODO_ADD',
  name
})

// 删除一个todo
export const delTodo = id => ({
  type: 'TODO_DEL',
  id
})

// 修改todo状态
export const changeStatus = id => ({
  type: 'TODO_CHANGE',
  id
})

// 修改todo的名称
export const changeName = (id, name) => ({
  type: 'TODO_CHANGE_NAME',
  id,
  name
})

// 过滤已完成的
export const clearTodo = () => ({
  type: 'TODO_CLEAR'
})

// 修改filter
export const filter = value => ({
  type: 'FILTER',
  value
})
