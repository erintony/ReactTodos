var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-eval-source-map',

    entry: [
        'webpack-hot-middleware/client',
        path.resolve(__dirname, 'src/entry.js')
    ],
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'index.js',
        publicPath: '/static/'
    },
    plugins: [
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ],
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader'
            ]
        },
          {
              // 小于8KB的图片使用base64内联
              test: /\.(png|jpg)$/,
              loader: 'url-loader?limit=8192'
          }
      ]
    }
};