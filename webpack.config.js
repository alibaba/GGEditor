const webpack = require('webpack');
// eslint-disable-next-line prefer-destructuring
const resolve = require('path').resolve;

module.exports = {
  entry: {
    ggeditor: './src/index.tsx',
  },
  output: {
    filename: '[name].js',
    library: 'GGEditor',
    libraryTarget: 'umd',
    libraryExport: 'default',
    path: resolve(process.cwd(), 'dist/'),
  },
  resolve: {
    alias: {
      '@': resolve('src'),
    },
    // Add `.ts` as a resolvable extension.
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.worker\.ts$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'worker-loader',
            options: {
              inline: true,
              fallback: false,
              name: 'ggLayout.worker.js',
            },
          },
        ],
      },
      {
        test: /\.js(x?)$/,
        include: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            // babelrc: true,
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.ts(x?)$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  plugins: [new webpack.NoEmitOnErrorsPlugin(), new webpack.optimize.AggressiveMergingPlugin()],
  devtool: 'source-map',
};
