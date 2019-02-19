// 导入
import React, { Component } from 'react'

// 导入react的router
import { Route, Link, Switch } from 'react-router-dom'

import { Layout, Menu } from 'antd'
// 导入子组件MovieList
import MovieList from './MovieList'
import MovieDetail from './MovieDetail'
const { Content, Sider } = Layout

// 创建
class Movie extends Component {
  render() {
    let key = this.props.location.pathname.replace(/\/\d+/, '')

    return (
      <Layout>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            selectedKeys={[key]}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="/movie/in_theaters">
              <Link to="/movie/in_theaters">正在热映</Link>
            </Menu.Item>
            <Menu.Item key="/movie/coming_soon">
              <Link to="/movie/coming_soon">即将上映</Link>
            </Menu.Item>
            <Menu.Item key="/movie/top250">
              <Link to="/movie/top250">Top250</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ borderLeft: '1px solid #ccc', background: '#fff' }}>
          <Content
            style={{
              background: '#fff',
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            <Switch>
              <Route path="/movie/detail/:id" component={MovieDetail} />
              <Route path="/movie/:type/:id?" component={MovieList} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

// 导出
export default Movie
