import express from 'express';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
const webpackConfig = require('../../../webpack.dev.js');
const config = require('config');
const node_env = config.get('Node').env;
const router = express.Router();

const frontendMiddleware = () => {
  const isDev = node_env === 'development';
  if (isDev) {
    return webpackDevMiddleware(webpack(webpackConfig), {
      publicPath: '/build/'
    });
  } else {
    return router.middleware();
  }
};

export default frontendMiddleware;
