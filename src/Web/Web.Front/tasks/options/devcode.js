'use strict';

// grunt-devcode: Remove devcode from production builds
module.exports = {
  options: {
    clean: true,
    css: false,
    html: true,
    js: false,
    block: {
      open: 'devcode',
      close: 'endcode'
    }
  },
  prodViews: {
    options: {
      source: '.build',
      dest: '.build',
      env: 'production'
    }
  },
  prodHtml: {
    options: {
      source: 'dist',
      dest: 'dist',
      env: 'production'
    }
  }
};
