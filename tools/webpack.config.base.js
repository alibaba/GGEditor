const path = require('path');

const rules = [{
  test: /\.js$/,
  exclude: [
    path.resolve(__dirname, 'node_modules'),
  ],
  use: {
    loader: 'babel-loader',
  },
}, {
  test: /\.scss$/,
  use: [{
    loader: 'style-loader',
  }, {
    loader: 'css-loader',
    options: {
      modules: true,
      camelCase: true,
      importLoaders: 1,
      localIdentName: '[local]--[hash:base64:5]',
    },
  }, {
    loader: 'postcss-loader',
    options: {
      config: {
        path: path.resolve(__dirname, './postcss.config.js'),
      },
    },
  }],
}];

const alias = {
  // '@antv/g6$': '@antv/g6/src',
  // '@antv/g6-editor$': '@antv/g6-editor/src',
  '@utils': path.resolve(__dirname, '..', 'src/utils'),
  '@common': path.resolve(__dirname, '..', 'src/common'),
  '@components': path.resolve(__dirname, '..', 'src/components'),
};

const externals = {
  react: {
    root: 'React',
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react',
  },
  'prop-types': {
    root: 'PropTypes',
    commonjs: 'prop-types',
    commonjs2: 'prop-types',
    amd: 'prop-types',
  },
};

module.exports = {
  module: {
    rules,
  },
  resolve: {
    alias,
  },
  externals,
};
