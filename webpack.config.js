var webpack   = require('webpack');
var path      = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR   = path.resolve(__dirname, 'src');

module.exports = {
  devtool   : 'eval-source-map',
  entry   : APP_DIR + '/index.js',
  output  : {
    path  : BUILD_DIR,
    filename : 'index.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
}