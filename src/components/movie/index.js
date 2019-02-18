// 导入
import React, { Component } from 'react'
import { Layout, Menu } from 'antd'
import { Link, Route } from 'react-router-dom'
import MovieList from './MovieList'
const { Content, Sider } = Layout

// 创建
class Movie extends Component {
  render() {
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
            <Route path="/movie/:aa" component={MovieList} />
          </Content>
        </Layout>
      </Layout>
    )
  }
}

// 导出
export default Movie
