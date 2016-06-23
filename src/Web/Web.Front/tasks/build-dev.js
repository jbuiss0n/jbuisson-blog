'use strict';

/*
 * build-dev
 * ---------
 * Clean .dist folder
 * Remove unnecesseary files in bower_components (declared in bower.json)
 * Copy JS files
 * Compile LESS files to dist folder
 * Add vendors prefixes to compiled CSS
 * Copy HTML and assets files to dist
 * Copy fonts from bower_components to dist/fonts
 * Create an angular constant module with config properties
 * Create an empty templatecache for angular (just to avoid breaking dependency)
 * Insert all those dependencies in dist/index.html
 */

module.exports = function (grunt) {
  grunt.registerTask(
    'build-dev',
    'build application to be run in local/dev environment',
    function () {
      grunt.task.run([
        'clean:begin',

        'copy:devJs',
        'copy:devTs',
        'ts:dev',
        'ngconstant:dev',
        'ngconstant:i18nDev',
        'html2js:dev',

        'copy:devCss',
        'less:devLess',
        'postcss:autoprefixer',

        'copy:devViews',
        'copy:devAssets',
        'copy:devBowerFonts',
        'copy:favicon',

        'fileblocks:dev'
      ]);
    });
};
