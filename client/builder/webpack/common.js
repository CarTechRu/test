/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DIR = path.resolve(__dirname, '../../..');

module.exports = {
  entry: {
    main: [path.resolve(DIR, 'client/src/index.jsx')],
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [path.join(DIR, 'client/src'), path.join(DIR, 'tests')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|jp(e*)g|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: Infinity,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(DIR, 'client/src/index.html'),
      minify: false,
    }),
  ],

  resolve: {
    modules: ['./client/src', './node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      actions: path.resolve(DIR, 'client/src/actions'),
      assets: path.resolve(DIR, 'client/src/assets'),
      components: path.resolve(DIR, 'client/src/components'),
      hooks: path.resolve(DIR, 'client/src/hooks'),
      utils: path.resolve(DIR, 'client/src/utils'),
    },
  },

  output: {
    path: path.join(DIR, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },
};
