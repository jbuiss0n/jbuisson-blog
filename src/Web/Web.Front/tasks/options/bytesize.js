'use strict';

// grunt-bytesize: output the filesize and gzip size of fil
module.exports = {
  prod: {
    src: [
      'dist/index.html',
      'dist/*.css',
      'dist/*.js'
    ]
  }
};
