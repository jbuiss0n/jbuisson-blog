'use strict';

// grunt-contrib-connect: Starts a local webserver
var grunt = require('grunt');
var modRewrite = require('connect-modrewrite');
var options = grunt.file.readJSON('build-config.json').connect;

module.exports = {
  options: {
    open: false,
    port: options.httpPort,
    hostname: 'localhost'
  },
  livereload: {
    options: {
      base: ['./dist'],
      livereload: options.livereloadPort,
      middleware: function (connect, options, middlewares) {
        var modRewrite = require('connect-modrewrite');
        middlewares.unshift(modRewrite(['!\\.html|\\.js|\\.svg|\\.css|\\.png$ /index.html [L]']));
        return middlewares;
      }
    }
  },
  keepalive: {
    options: {
      keepalive: true,
      livereload: false,
      base: ['./dist']
    }
  }
};
