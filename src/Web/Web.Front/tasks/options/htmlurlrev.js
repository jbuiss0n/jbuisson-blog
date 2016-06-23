'use strict';

// grunt-htmlurlrev: Update reference to assets in HTML files to use versionned files created with the filerev task.
module.exports = {
  prod: {
    options: {
      assets: '.build/filerev.json'
    },
    src: [
      '.build/**/*.html'
    ]
  }
};
