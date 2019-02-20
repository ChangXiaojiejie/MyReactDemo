// 导入React
import React, { Component } from 'react'

// 导入action
import { add, sub, addNum } from './action'

// 1.导入connect
import { connect } from 'react-redux'

// 1. 当前组件属性Provider组件的后代
//       2. 必须使用connect方法连接
//       3. connect方法的使用规则 connect()方法需要两个参数，并且会返回一个新的函数，我们需要使用这个新的函数包裹子组件
//         connect(null, null)(组件)

// 创建Count
class Count extends Component {
  render() {
    let { dispatchAdd, dispatchSub, dispatchAddNum, count } = this.props
    return (
      <div>
        <p>当前的值为：{count}</p>
        <button onClick={dispatchAdd}>+1</button>
        <button onClick={dispatchSub}>-1</button>
        <button onClick={() => dispatchAddNum(5)}>+5</button>
      </div>
    )
  }

  //
  componentWillMount() {
    console.log('props：', this.props)
  }
}

// 导出Count
// connect参数1： mapStateToProps
//mapStateToProps 返回值是一个对象
const mapStateToProps = state => {
  console.log('当前的state的值：', state)
  return {
    count: state
  }
}
// 参数2：mapDispatchToProps
const mapDispatchToProps = dispatch => ({
  // 创建添加的方法
  dispatchAdd() {
    // console.log('执行+1')
    dispatch(add())
  },
  dispatchSub() {
    // console.log('执行-1')
    dispatch(sub())
  },
  dispatchAddNum(num) {
    // console.log('执行+' + num)
    dispatch(addNum(num))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Count)
