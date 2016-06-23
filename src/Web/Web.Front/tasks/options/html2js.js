'use strict';

// grunt-html2js: Puts HTML templates into Angular $templateCache

var grunt = require('grunt');
var templates = grunt.file.readJSON('build-config.json').templates;

module.exports = {
  options: {
    module: templates.moduleName,
    singleModule: true,
    useStrict: true,
    htmlmin: {
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeRedundantAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    }
  },
  dev: {
    src: [],
    dest: 'dist/core/templates.js'
  },
  prod: {
    options: {
      base: '.build'
    },
    src: '.build/**/views/**/*.html',
    dest: '.build/core/templates.js'
  }
};
