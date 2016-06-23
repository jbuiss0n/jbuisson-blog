'use strict';

// grunt-contrib-copy: Copy files

var grunt = require('grunt');
var config = grunt.file.readJSON('build-config.json');

var cwd = config.appDirectory;
var js = config.copy.js;
var css = config.copy.css;

js.push('core/**/*.js');
js.push('modules/**/*.js');

module.exports = {
  devJs: {
    expand: true,
    cwd: cwd,
    src: js,
    dest: 'dist/'
  },
  devTs: {
    expand: true,
    cwd: cwd,
    src: ['core/**/*.ts', 'modules/**/*.ts'],
    dest: 'dist/app'
  },
  prodJs: {
    expand: true,
    cwd: cwd,
    src: js,
    dest: '.build/'
  },
  devCss: {
    expand: true,
    cwd: cwd,
    src: css,
    dest: 'dist/'
  },
  prodCss: {
    expand: true,
    cwd: cwd,
    src: css,
    dest: '.build/'
  },
  devViews: {
    expand: true,
    cwd: cwd,
    src: [
      '**/*.html'
    ],
    dest: 'dist/'
  },
  prodViews: {
    expand: true,
    cwd: cwd,
    src: [
      '**/*.html'
    ],
    dest: '.build/'
  },
  devAssets: {
    expand: true,
    cwd: cwd,
    src: [
      '**/assets/**/*.*'
    ],
    dest: 'dist/'
  },
  prodAssets: {
    expand: true,
    cwd: cwd,
    src: [
      '**/assets/**/*.*'
    ],
    dest: 'dist/'
  },
  devBowerFonts: {
    expand: true,
    flatten: true,
    cwd: cwd,
    src: [
      'bower_components/**/*.ttf',
      'bower_components/**/*.eof',
      'bower_components/**/*.svg',
      'bower_components/**/*.woff',
      'bower_components/**/*.woff2'
    ],
    dest: 'dist/fonts'
  },
  prodBowerFonts: {
    expand: true,
    flatten: true,
    cwd: cwd,
    src: [
      'bower_components/**/*.ttf',
      'bower_components/**/*.eof',
      'bower_components/**/*.svg',
      'bower_components/**/*.woff',
      'bower_components/**/*.woff2'
    ],
    dest: 'dist/fonts'
  },
  favicon: {
    expand: true,
    cwd: cwd,
    src: [
      'favicon.ico'
    ],
    dest: 'dist/'
  }
};
