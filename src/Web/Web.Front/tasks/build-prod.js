'use strict';

/*
 * build-prod
 * ---------
 * Clean .dist folder
 * Remove unnecesseary files in bower_components (declared in bower.json)
 * Copy assets files to dist
 * Minify the images
 * Revision the images and store the revisions paths in .build/filerev.json
 * Copy HTML files to ./build
 * Replace the reference to revisionned files by the good path
 * Copy JS files
 * Create an angular constant module with config properties
 * Store view in Angular templates cache
 * Annotate the AngularJs files to permit minification without break the DI
 * Concat all JS files and minify the result
 * Create a LESS file who imports all the others less files in the app
 * Compile this LESS file to dist folder
 * Add vendors prefixes to compiled CSS
 * Copy fonts from bower_components to dist/fonts
 * Revision the CSS and JS file
 * Insert all those dependencies in dist/index.html
 */

module.exports = function (grunt) {
  grunt.registerTask(
    'build-prod',
    'build application to be run in production environment',
    function () {
      grunt.task.run([
        'clean:begin',

        'copy:prodAssets',
        'imagemin:prod',
        'filerev:prodImg',
        'filerev_assets:prod',

        'copy:prodViews',
        'htmlurlrev:prod',
        'devcode:prodViews',

        'ts:prod',
        'copy:prodJs',
        'ngconstant:prod',
        'ngconstant:i18nProd',
        'html2js:prod',
        'ngAnnotate:prod',
        'concat:prod',
        'uglify:prod',

        'less_imports:prod',
        'less:prodLess',
        'postcss:autoprefixer',
        'cssurlrev:prod',

        'copy:prodBowerFonts',
        'copy:favicon',

        'filerev:prodCss',
        'filerev:prodJs',

        'fileblocks:prod',
        'devcode:prodHtml',
        'clean:end',

        'bytesize:prod'
      ]);
    });
};




