'use strict';

// grunt-contrib-uglify: Minify JS files

var grunt = require('grunt');
var config = grunt.file.readJSON('build-config.json');
var keepUnminified = config.keepUnminified;
var outputName = config.outputNames.scripts;
var files = {};

if (keepUnminified) {
  files['dist/' + outputName + '.min.js'] = 'dist/' + outputName + '.js';
}
else {
  files['dist/' + outputName + '.js'] = '.build/' + outputName + '.js';
}

module.exports = {
  prod: {
    options: {
      sourceMap: false
    },
    files: files
  }
};
