'use strict';

var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    plugins: [
      require('karma-webpack'),
      require('karma-jasmine'),
      require('karma-chai'),
      require('karma-chrome-launcher'),
      require('karma-coverage')
    ],

    basePath: '',
    frameworks: [ 'jasmine', 'chai'],
    files: [ 'tests/**/*.js' ],

    preprocessors: {
      'tests/**/*.js': [ 'webpack' ]
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    },

    reporters: [
      'dots',
      'coverage'
    ],

    coverageReporter: {
      type: 'text',
      dir: 'coverage/'
    },

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
