'use strict';

// grunt-contrib-concat: Concatenate JS and CSS files together
var grunt = require('grunt');
var config = grunt.file.readJSON('build-config.json');
var dependencies = config.dependencies.js;
var keepUnminified = config.keepUnminified;
var outputName = config.outputNames.scripts;

module.exports = {
  prod: {
    options: {
      sourceMap: false
    },
    expand: true,
    cwd: '.build',
    src: dependencies,
    dest: keepUnminified ? 'dist/' + outputName + '.js' : '.build/' + outputName + '.js',

    //Workaround (see https://github.com/gruntjs/grunt-contrib-concat/issues/31)
    rename: function (dest) {
      return dest;
    }
  }
};
