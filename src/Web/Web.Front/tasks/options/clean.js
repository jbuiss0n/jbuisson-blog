'use strict';

// grunt-contrib-clean : Clean folders to start fresh
module.exports = {
  begin: {
    src: [
      'dist/*',
      '.build/*'
    ]
  },
  end: {
    src: [
      '.build/'
    ]
  }
};

