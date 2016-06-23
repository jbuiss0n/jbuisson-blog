'use strict';

// grunt-ng-constant: Generates an Angular `constant` service with the content of a JSON file

var grunt = require('grunt');
var buildConfig = grunt.file.readJSON('build-config.json');

var config = buildConfig.config;
var translate = buildConfig.translate;

module.exports = {
  dev: {
    options: {
      name: config.moduleName,
      dest: 'dist/config/config.js',
      constants: {
        config: grunt.file.readJSON('app/config/dev.json')
      }
    }
  },
  i18nDev: {
    options: {
      name: translate.moduleName,
      dest: 'dist/core/translate.js',
      constants: {
        translate: {
          en: grunt.file.exists('app/translate/en.json') ? grunt.file.readJSON('app/translate/en.json') : {}
        }
      }
    }
  },
  prod: {
    options: {
      name: config.moduleName,
      dest: '.build/config/config.js',
      constants: {
        config: grunt.file.readJSON('app/config/prod.json')
      }
    }
  },
  i18nProd: {
    options: {
      name: translate.moduleName,
      dest: '.build/core/translate.js',
      constants: {
        translate: {
          en: grunt.file.exists('app/translate/en.json') ? grunt.file.readJSON('app/translate/en.json') : {}
        }
      }
    }
  },
};
