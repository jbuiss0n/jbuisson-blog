'use strict';

// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: 'app',

    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'chai'],
    plugins: [
      'karma-chai',
      'karma-chai-as-promised',
      'karma-coverage',
      'karma-junit-reporter',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-threshold-reporter',
      'karma-spec-reporter'
    ],
    exclude: [],

    // web server port
    port: 8080,

    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: false,
    singleRun: true,

    reporters: ['spec', 'clear-screen']
  });
};
