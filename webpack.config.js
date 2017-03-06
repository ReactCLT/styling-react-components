const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'examples/index.js'),
  output: {
    publicPath: 'dist/',
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /\/vanilla\/.*\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\/css-modules\/.*\.css$/, use: ['style-loader', 'css-loader?modules'] },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, use: 'json-loader' }
    ]
  }
}
