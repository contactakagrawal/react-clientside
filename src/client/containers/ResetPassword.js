import React from 'react';
import { Input } from 'antd';
import 'antd/lib/input/style';
import Nav from '../components/Nav';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { nameSelector } from '../selectors'

const ResetPassword = (props) => (
  <div className="content">
    <Nav />
    <h1>Reset Password</h1>
    <hr />  <h2>{props.name}</h2> <Input placeholder="Enter new password" />
  </div>
);

const mapStateToProps = () => createStructuredSelector({
  name: nameSelector
});

export default connect(mapStateToProps, {})(ResetPassword);
