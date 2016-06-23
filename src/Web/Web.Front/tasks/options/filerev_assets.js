'use strict';

// grunt-filerev-assets: save hashmap of versionned files created by the 'filerev' task on which the 'cssurlrev' & 'htmlurlrev' task operates
module.exports = {
  prod: {
    options: {
      dest: '.build/filerev.json',
      cwd: 'dist/'
    }
  }
};
