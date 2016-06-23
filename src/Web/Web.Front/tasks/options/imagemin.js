'use strict';

// grunt-contrib-imagemin: Minify images (jpg, gif, png, svg)
module.exports = {
  prod: {
    files: [{
      expand: true,
      cwd: 'dist',
      src: '**/images/**/*.{png,jpg,jpeg,gif,svg}',
      dest: 'dist'
    }]
  }
};
