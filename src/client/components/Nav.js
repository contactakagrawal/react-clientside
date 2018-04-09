import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <Menu mode="horizontal">
        <Menu.Item key="mail">
          <Link to="/">
            <Icon type="mail" />Forget Password
          </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/reset-password">
            <Icon type="mail" />
            <Icon type="appstore" />Reset Password
          </Link>
        </Menu.Item>
        <Menu.Item key="app">
          <Link to="/self-registration">
            <Icon type="mail" />
            <Icon type="user" />Self Registration
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Nav;
