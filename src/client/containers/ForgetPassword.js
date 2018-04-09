import React from 'react';
import { Button } from 'antd';
import 'antd/lib/button/style';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Nav from '../components/Nav';
import { nameSelector } from '../selectors'

const ForgetPassword = (props) => (
  <div className="content">
    <Nav />
    <h1>Forget Password</h1>
    <hr /> <h2>{props.name}</h2> <Button type="primary">Click Here</Button>
  </div>
);

const mapStateToProps = () => createStructuredSelector({
  name: nameSelector
});

export default connect(mapStateToProps, {})(ForgetPassword);
