const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin(),
    new CopyWebpackPlugin([
      {
        from: __dirname + '/public/favicon.png',
        to: __dirname + '/dist/favicon.png'
      }
    ]),
    new CompressionPlugin()
  ],
  mode: 'production'
});
