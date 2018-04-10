import('regenerator-runtime/runtime');
import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer';
import appSaga from '../sagas';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { IntlProvider, defineMessages } from 'react-intl';

const messages = defineMessages({
  header: {
    id: 'test',
    defaultMessage: 'Hello from Intl'
  }
});

import ForgetPassword from './ForgetPassword';
import ResetPassword from './ResetPassword';
import SelfRegistration from './SelfRegistration';
import styled from 'styled-components';

const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  flex-direction: column;
`;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(appSaga);

const App = () => (
  <IntlProvider messages={messages} locale="en">
    <Provider store={store}>
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Data Difference Reports"
          defaultTitle="Data Difference Reports"
        >
          <meta name="description" content="Data Difference Viewer" />
        </Helmet>
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={ForgetPassword} />
              <Route exact path="/reset-password" component={ResetPassword} />
              <Route
                exact
                path="/self-registration"
                component={SelfRegistration}
              />
            </Switch>
          </div>
        </Router>
      </AppWrapper>
    </Provider>
  </IntlProvider>
);

export default App;
