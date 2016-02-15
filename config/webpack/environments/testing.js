'use strict';

var webpack = require('webpack');

/**
 * Development config
 * @param  {String} _path Absolute path to application
 * @return {Object}       Object of development settings
 */
module.exports = function(_path) {
  return {
    context: _path,
    entry: _path + '/tests/test.js',
    devtool: 'inline-source-map', // sourcemap support
    plugins: [
      new webpack.DefinePlugin({
        'typeof window': JSON.stringify('object')
      })
    ],
    node: {
      fs: 'empty'
    },

    // Instrument code that isn't test or vendor code.
    module: {
      postLoaders: [{
        test: /\.js$/,
        exclude: /(test|node_modules)\//,
        loader: 'istanbul-instrumenter'
      }]
    }
  };
};

