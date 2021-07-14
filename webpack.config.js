const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = function (env) {
  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
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
        {
          test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
          type: 'asset/inline',
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html'
      }),
      new CleanWebpackPlugin(),
    ],
    devServer: {
      contentBase: path.join(__dirname, 'build'),
      port: 8080,
      open: 'Google Chrome', // 'google-chrome' on Linux and 'chrome' on Windows
    },
    devtool: env.development ? 'source-map' : '',
  };
}