//
let list = [
  { id: 1, name: '吃饭' },
  { id: 2, name: '睡觉' },
  { id: 3, name: '打豆豆' }
]
export default function reducer(state = list, action) {
  if (action.type === 'ADD_TODO') {
    // console.log('reducer要处理添加的操作')
    // 创建一个新的数据对象
    let newData = {
      id: +new Date(),
      name: action.name
    }
    return [newData, ...state]
  }
  if (action.type === 'DEL_TODO') {
    // console.log('reducer要处理删除的操作，删除的id为：', action.id)
    let list = state
    let index = list.findIndex(item => item.id === action.id)
    list.splice(index, 1)
    return list
  }
  return state
}
