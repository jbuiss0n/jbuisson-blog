'use strict';

// Watches files for changes and runs tasks based on the changed files

var grunt = require('grunt');
var connect = grunt.file.readJSON('build-config.json').connect;

module.exports = {
  options: {
    livereload: connect.livereloadPort
  },
  styles: {
    options: {
      livereload: false
    },
    files: [
      'app/**/*.less'
    ],
    tasks: [
      'less:devLess',
      'postcss:autoprefixer',
      'fileblocks:dev'
    ]
  },
  stylesSoftReload: {
    files: ['dist/**/*.css']
  },
  views: {
    files: [
      'app/**/*.html'
    ],
    tasks: [
      'copy:devViews',
      'fileblocks:dev'
    ]
  },
  config: {
    files: ['app/config/dev.json'],
    tasks: [
      'ngconstant:dev',
      'fileblocks:dev'
    ]
  },
  translate: {
    files: ['app/translate/en.json'],
    tasks: [
      'ngconstant:i18nDev',
      'fileblocks:dev'
    ]
  },
  scripts: {
    files: [
      'app/**/*.js',
      '!app/scripts/**/*.test.js'
    ],
    tasks: [
      'copy:devJs',
      'fileblocks:dev'
    ]
  },
  ts: {
    files: [
      'app/**/*.ts',
    ],
    tasks: [
      'copy:devTs',
      'ts:dev',
      'fileblocks:dev'
    ]
  },
  assets: {
    files: [
      'app/**/assets/**.*',
      'bower_components/**/*.ttf',
      'bower_components/**/*.eof',
      'bower_components/**/*.svg',
      'bower_components/**/*.woff'
    ],
    tasks: [
      'copy:devAssets',
      'copy:devBowerFonts'
    ]
  }
};
