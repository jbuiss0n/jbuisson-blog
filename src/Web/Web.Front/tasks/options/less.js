'use strict';

// grunt-contrib-less: Compiles Less to CSS and generates necessary files if requested

var grunt = require('grunt');
var outputName = grunt.file.readJSON('build-config.json').outputNames.styles;

module.exports = {
  options: {
    strictMath: true,
    compress: true
  },
  devLess: {
    files: [{
      expand: true,
      cwd: 'app',
      src: ['core/**/*.less', 'modules/**/*.less'],
      ext: '.css',
      extDot: 'first',
      dest: 'dist/'
    }]
  },
  prodLess: {
    src: '.build/styles.less',
    dest: 'dist/' + outputName + '.css'
  }
};
