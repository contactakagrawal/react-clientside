import React from 'react';
import { Button } from 'antd';
import 'antd/lib/button/style';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { loadName } from '../../actions'
import { injectIntl, FormattedMessage } from 'react-intl'

import Nav from '../../components/Nav';
import { nameSelector } from '../../selectors'

const ForgetPassword = (props) => (
  <div className="content">
    <Nav />
    <h1>Forget Password</h1>
    <hr /> <h2>{props.name}</h2> <Button type="primary">Click Here</Button>
    <p> <FormattedMessage {...props.intl.messages.header} /></p>
  </div>
);

const mapStateToProps = () => createStructuredSelector({
  name: nameSelector
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadName: () => dispatch(loadName)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(ForgetPassword));
