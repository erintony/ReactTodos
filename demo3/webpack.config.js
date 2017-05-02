var path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src/entry.js'),
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'index.js',
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        }
      ]
    }
};