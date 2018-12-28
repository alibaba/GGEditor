const path = require('path');
const { merge } = require('lodash');
const baseConfig = require('./webpack.config.base');

const mode = 'production';

const entry = {
  bundle: path.resolve(__dirname, '..', 'src/index.js'),
};

const devtool = 'cheap-module-source-map';

const output = {
  path: path.resolve(__dirname, '..', 'dist'),
  filename: '[name].js',
  library: 'GGEditor',
  libraryTarget: 'umd',
};

module.exports = merge(baseConfig, {
  mode,
  devtool,
  entry,
  output,
});
