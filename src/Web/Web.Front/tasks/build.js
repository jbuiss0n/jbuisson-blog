module.exports = function (grunt) {
  grunt.registerTask(
    'build',
    'build application',
    function () {
      var type = (this.args[0] || 'dev');
      var tasks = ['build-' + type];
      grunt.task.run(tasks);
    });
};
