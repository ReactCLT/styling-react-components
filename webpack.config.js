const { resolve } = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  entry: [
    resolve(__dirname, 'index.css'),
    resolve(__dirname, 'index.js')
  ],
  output: {
    publicPath: 'dist/',
    filename: 'index.js'
  },
  module: {
    rules: [
      { test: /index\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\/vanilla\/.*\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\/css-modules\/.*\.css$/, use: ['style-loader', 'css-loader?modules'] },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, use: 'json-loader' }
    ]
  },
  plugins: [
    new OpenBrowserPlugin()
  ]
}
