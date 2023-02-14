import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Space, Menu } from 'antd'
import { Outlet, Link } from 'react-router-dom';
const { Header, Content, Sider} = Layout
const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#3ba0e9',
};


const clickHandle = (item) => {
  console.info(item)
}

const items = [{
  key: '1',
  label: <Link to=''>数据预览</Link>,
  url: 'review'
},{
  key: '2',
  label: <Link to='manager'>内容管理</Link>,
  url: 'manager'
},{
  key: '3',
  label: <Link to='article'>发布文章</Link>,
  url: 'article'
}]

function Index() {
  return (
      <Layout>
      <Sider style={siderStyle}>
      <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
          onClick={(item) => clickHandle(item)}
        />
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Index
