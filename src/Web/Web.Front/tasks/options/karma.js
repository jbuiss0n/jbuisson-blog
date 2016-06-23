'use strict';

// karma: test runner configuration

var grunt = require('grunt');
var dependencies = grunt.file.readJSON('build-config.json').testDependencies;

module.exports = {
  options: {
    configFile: 'karma.conf.js',
    files: dependencies
  },
  single: {
    reporters: [
      'spec'
    ]
  },
  reports: {
    reporters: [
      'progress',
      'coverage',
      'junit',
      'threshold'
    ],
    preprocessors: {
      'app/!(bower_components)/**/*.js': 'coverage'
    },
    coverageReporter: {
      dir: '../reports/coverage',
      reporters: [{
        type: 'html',
        subdir: '.'
      }, {
        type: 'clover',
        subdir: '.'
      }, {
        type: 'text',
        subdir: '.'
      }]
    },
    junitReporter: {
      outputDir: '..',
      outputFile: 'reports/tests/tests-result.xml',
    },
    thresholdReporter: {
      thresholds: {
        controller: 75,
        directive: 55,
        service: 80,
        filter: 100,
        router: 100
      },
      pmdXML: '../reports/violation/threshold-reporter.xml'
    }
  },
  watch: {
    port: 9490,
    runnerPort: 9499,
    autoWatch: true,
    singleRun: false
  }
};
