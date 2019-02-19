// 导入
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  withRouter,
  Route,
  Switch
} from 'react-router-dom'

// 导入antd的样式
import { Layout, Menu } from 'antd'

// 导入App.css样式
import './App.css'

// 导入子组件
import Home from './components/home'
import About from './components/about'
import Movie from './components/movie'

const { Header, Content, Footer } = Layout

// 导航菜单
let NavMenu = withRouter(({ location }) => {
  let key = location.pathname
  if (key.startsWith('/movie')) {
    key = '/movie'
  }
  // console.log('key:', key)
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      selectedKeys={[key]}
      style={{ lineHeight: '64px' }}
    >
      <Menu.Item key="/">
        <NavLink exact to="/">
          首页
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/movie">
        <NavLink to="/movie/in_theaters">电影列表</NavLink>
      </Menu.Item>
      <Menu.Item key="/about">
        <NavLink to="/about">关于</NavLink>
      </Menu.Item>
    </Menu>
  )
})

//

// 创建
class App extends Component {
  render() {
    return (
      <Router>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <NavMenu />
          </Header>
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/movie" component={Movie} />
              <Route path="/about" component={About} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            蚂蚁金服，我是一只小蚂蚁&copy;2019
          </Footer>
        </Layout>
      </Router>
    )
  }
}

// 导出
export default App
