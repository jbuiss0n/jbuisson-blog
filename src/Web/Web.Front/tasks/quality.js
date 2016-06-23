module.exports = function (grunt) {
  grunt.registerTask('quality', 'Generate plato js report', function () {
    grunt.task.run([
      'plato:generate'
    ]);
  });
};
