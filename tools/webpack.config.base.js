const path = require('path');
const webpack = require('webpack');
const pkg = require('../package.json');

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

const plugins = [
  new webpack.DefinePlugin({
    GG_EDITOR_VERSION: JSON.stringify(pkg.version),
    G6_VERSION: JSON.stringify(pkg.dependencies['@antv/g6']),
    G6_EDITOR_VERSION: JSON.stringify(pkg.dependencies['@antv/g6-editor']),
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
];

const alias = {
  // '@antv/g6$': '@antv/g6/src',
  // '@antv/g6-editor$': '@antv/g6-editor/src',
  '@common': path.resolve(__dirname, '..', 'src/common'),
  '@components': path.resolve(__dirname, '..', 'src/components'),
  '@helpers': path.resolve(__dirname, '..', 'src/helpers'),
  '@utils': path.resolve(__dirname, '..', 'src/utils'),
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
  plugins,
  resolve: {
    alias,
  },
  externals,
};
