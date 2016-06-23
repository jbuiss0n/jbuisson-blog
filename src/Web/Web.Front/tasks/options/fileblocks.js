'use strict';

// grunt-file-blocks: Insert CSS and JS tags into HTML files
var grunt = require('grunt');

var dev = {
  src: 'dist/index.html',
  blocks: {
    scripts: {
      cwd: 'dist',
      src: grunt.file.readJSON('build-config.json').dependencies.js
    }
    ,
    styles: {
      cwd: 'dist',
      src: grunt.file.readJSON('build-config.json').dependencies.css
    }
  }
};
var prod = {
  src: '.build/index.html',
  dest: 'dist/index.html',
  blocks: {
    scripts: {
      cwd: 'dist',
      src: '*.js'
    },
    styles: {
      cwd: 'dist',
      src: '*.css'
    }
  }
};

if (!grunt.file.exists('dist/index.html')) {
  dev = {};
  prod = {};
}

module.exports = {
  dev: dev,
  prod: prod
};
