// 导出

// 创建一个reducer
export default function reducer(state = 0, action) {
  if (action.type === 'ADD') {
    return state + 1
  }
  if (action.type === 'SUB') {
    return state - 1
  }
  if (action.type === 'ADD_NUM') {
    return state + action.num
  }
  return state
}
