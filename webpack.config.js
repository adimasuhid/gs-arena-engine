const path = require('path');
require("@babel/register");

const config = {

  entry: './lib/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'gs-arena-engine.js',
  },

  module: {
    rules : [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  },

  // Plugins
  plugins: [],
  watch: true,
  devtool: 'source-map',
};

module.exports = config;
