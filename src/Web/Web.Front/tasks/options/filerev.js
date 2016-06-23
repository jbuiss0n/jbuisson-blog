'use strict';

// grunt-filerev: Renames files for browser caching purposes
var grunt = require('grunt');
var filerev = grunt.file.readJSON('build-config.json').filerev;
var excludes = filerev ? filerev.excludes : {};

var images = ['dist/**/images/**/*.{png,jpg,jpeg,gif,svg}'];
var css = ['dist/styles.css'];
var js = ['dist/scripts.js'];

if (excludes.images) {
  for (var i = 0; i < excludes.images.length; i++) {
    images.push(excludes.images[i]);
  }
}

if (excludes.css) {
  for (var i = 0; i < excludes.css.length; i++) {
    css.push(excludes.css[i]);
  }
}

if (excludes.js) {
  for (var i = 0; i < excludes.js.length; i++) {
    js.push(excludes.js[i]);
  }
}

module.exports = {
  options: {
    algorithm: 'md5',
    length: 8
  },
  prodImg: {
    src: images
  },
  prodCss: {
    src: css
  },
  prodJs: {
    src: js
  }
};
