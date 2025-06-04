import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  SettingOutlined
} from '@ant-design/icons';
import { Link, Outlet } from 'react-router-dom';

const { Header, Sider, Content}  = Layout;

class DashboardPage extends Component{
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({collapsed: !this.state.collapsed});
  };

  render(){
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: "100vh"}}>
        <Header className="header" style={{ padding: 0, background: "#fff" }}>
          <div style={{ padding: "0 16px", display: "flex", alignItems: "center" }}>
            <h1>Header</h1>
          </div>
        </Header>

        <Layout>
          <Sider 
            collapsible
            collapsed={collapsed}
            onCollapse={this.toggleCollapsed}
            width={200}
            style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["homepage"]}
              multiple={false}
              style={{ height: "100%", borderRight: 0 }}>

              <Menu.Item key="homepage" icon={<HomeOutlined/>}>
                <Link to="/dashboard/home">Home</Link>
              </Menu.Item>

              <Menu.SubMenu key="systemControl" icon={<SettingOutlined/>} title="System Control">
                <Menu.Item key="generalCodePage">
                  <Link to="/dashboard/generalCode">General Code</Link>
                </Menu.Item>
              </Menu.SubMenu>
            </Menu>
          </Sider>

          <Layout style={{ padding: "24px 24px" }}>
            <Content style={{ padding: 0, margin: 0, minHeight: 280, background: "#fff" }}>
              <Outlet/>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
};

export default DashboardPage;