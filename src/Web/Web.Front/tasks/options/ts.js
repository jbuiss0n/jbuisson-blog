'use strict';

// grunt-typescript : Compile typescript files
var grunt = require('grunt');
var config = grunt.file.readJSON('build-config.json');
var cwd = config.appDirectory;

module.exports = {
  dev: {
    src: ['typings/index.d.ts', 'app/**/*.ts', '!app/bower_components/**'],
    reference: 'typings/index.d.ts',
    outDir: 'dist/',
    options: {
      rootDir: cwd,
      removeComments: true,
      failOnTypeErrors: true,
      sourceMap: true,
      jsx: 'react',
    }
  },
  prod: {
    src: ['**/*.ts', '!bower_components/**'],
    reference: 'typings/index.d.ts',
    outDir: '.build/',
    options: {
      rootDir: cwd,
      failOnTypeErrors: true,
      sourceMap: false,
      jsx: 'react',
    }
  }
};
