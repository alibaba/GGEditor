const path = require('path');
const webpack = require('webpack');

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
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  }),
];

const alias = {
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
