const path = require('path');
const { merge } = require('lodash');
const baseConfig = require('./webpack.config.base');

const entry = {
  bundle: path.resolve(__dirname, '..', 'src/index.js'),
};

const devtool = 'source-map';

const output = {
  path: path.resolve(__dirname, '..', 'dist'),
  filename: '[name].js',
  library: 'GGEditor',
  libraryTarget: 'umd',
};

module.exports = merge(baseConfig, {
  devtool,
  entry,
  output,
});
