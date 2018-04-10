import React from 'react';
import { Rate } from 'antd';
import 'antd/lib/rate/style';
import Nav from '../../components/Nav';

const SelfRegistration = () => (
  <div className="content">
    <Nav />
    <h1>Self Registration</h1>
    <hr /> <Rate />
  </div>
);

export default SelfRegistration;
