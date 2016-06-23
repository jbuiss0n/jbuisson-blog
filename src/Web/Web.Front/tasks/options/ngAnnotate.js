'use strict';

// grunt-ng-annotate: Process Angular source file so they can be easily minified
module.exports = {
  prod: {
    files: [{
      expand: true,
      src: [
        '.build/**/*.js'
      ]
    }]
  }
};
