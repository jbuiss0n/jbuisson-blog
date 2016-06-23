'use strict';

//grunt-less_imports = Generate a single less file form many

var grunt = require('grunt');
var dependencies = grunt.file.readJSON('build-config.json').dependencies.less;
var css = grunt.file.readJSON('build-config.json').copy.css;

module.exports = {
  prod: {
    expand: true,
    cwd: 'app',
    src: [dependencies, css],
    dest: '.build/styles.less',

    //Workaround (see https://github.com/gruntjs/grunt-contrib-concat/issues/31)
    rename: function (dest) {
      return dest;
    }
  }
};
