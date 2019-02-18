// 导入
import React from 'react'

// 导入react的router
import { Route, Link } from 'react-router-dom'

import { Layout, Menu } from 'antd'
// 导入子组件MovieList
import MovieList from './MovieList'
const { Content, Sider } = Layout

// 创建
function Movie(props) {
  return (
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item key="1">
            <Link to="/movie/in_theaters">正在热映</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/movie/coming_soon">即将上映</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/movie/top250">Top250</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280
          }}
        >
          <Route path="/movie/:params">
            <MovieList />
          </Route>
        </Content>
      </Layout>
    </Layout>
  )
}

// 导出
export default Movie
