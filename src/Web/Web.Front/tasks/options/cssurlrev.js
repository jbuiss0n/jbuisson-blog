'use strict';

// grunt-cssurlrev: Update reference to assets in CSS files to use versionned files created with the filerev task.
module.exports = {
  prod: {
    options: {
      assets: '.build/filerev.json'
    },
    src: [
      'dist/**/*.css'
    ]
  }
};
