// 导入
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  withRouter
} from 'react-router-dom'
// 导入antd
import { Layout, Menu } from 'antd'
// 导入样式
import './App.css'
// 导入组件
import Home from './components/home'
import About from './components/about'
import Movie from './components/movie'
const { Header, Footer, Content } = Layout

// 创建App
const MovieMenu = withRouter(({ location }) => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={{ lineHeight: '64px' }}
      selectedKeys={[location.pathname]}
    >
      <Menu.Item key="/">
        <NavLink exact to="/">
          首页
        </NavLink>
      </Menu.Item>
      <Menu.Item key="/movie">
        <NavLink to="/movie">电影列表</NavLink>
      </Menu.Item>
      <Menu.Item key="/about">
        <NavLink to="/about">关于</NavLink>
      </Menu.Item>
    </Menu>
  )
})

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Header className="header">
            <div className="logo" />
            <MovieMenu />
          </Header>

          <Content>
            <Route exact path="/" component={Home} />
            <Route path="/movie" component={Movie} />
            <Route path="/about" component={About} />
          </Content>
          <Footer>黑马程序员 ©2018 Created by 传智播客</Footer>
        </Layout>
      </Router>
    )
  }
}

// 导入App
export default App
