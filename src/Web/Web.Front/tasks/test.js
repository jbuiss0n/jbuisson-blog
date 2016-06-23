module.exports = function (grunt) {
  grunt.registerTask('test', 'Run tests', function () {
    var type = (this.args[0] || 'single');
    grunt.task.run([
      'karma:' + type
    ]);
  });
};
