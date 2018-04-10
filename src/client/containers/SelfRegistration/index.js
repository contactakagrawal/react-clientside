import React from 'react';
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./SelfRegistration.js'),
  loading: () => <div> Loading... </div>,
});

export default class App extends React.Component {
  render() {
    return <LoadableComponent/>;
  }
}