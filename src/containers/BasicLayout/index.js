import React, {Component} from 'react';
import cx from 'classnames';
import Loadable from 'react-loadable';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {hot} from "react-hot-loader";
import {Route, Switch, Redirect, NavLink, Prompt, Link} from "react-router-dom";
import AuthorizedRoute from "components/Authorized/AuthorizedRoute";
import HotLoading from 'components/HotLoading';
import styles from 'containers/BasicLayout/basiclayout.css';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content,Row, Col } = Layout;


const HomePage = Loadable({
  loader: () => import('screens/homepage'),
  loading: HotLoading
});
const Hello = Loadable({
  loader: () => import('screens/hello'),
  loading: HotLoading
})

class BasicLayout extends Component {
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1" icon={<UserOutlined />}>
              <Link to='/'>home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<UserOutlined />}>
              <Link to='/hello'>hello</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
          <div className={styles.contentContainer}>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/hello' component={Hello} />
            </Switch>
          </div>
        </Layout>
      </Layout>
    )
  }
}

BasicLayout.propTypes = {}
export default connect(
  state => (
    {home: state.home}
  ),
  {}
)(BasicLayout);

