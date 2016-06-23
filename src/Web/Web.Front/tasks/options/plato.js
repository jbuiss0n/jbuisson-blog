'use strict';

// grunt-plato: Generate static analysis reports via plato

var grunt = require('grunt');

module.exports = {
  generate: {
    options: {
      jshint: grunt.file.readJSON('.jshintrc')
    },
    files: {
      'reports/quality': ['app/!(bower_components)/**/*.js']
    }
  }
};
