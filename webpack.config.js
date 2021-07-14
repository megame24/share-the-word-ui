const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.[jt]sx?$/,
          use: ['babel-loader'],
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: 'index.html'
      }),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      port: 3000,
      compress: true,
    },
    ...env.development && { devtool: 'source-map' }
  }
};