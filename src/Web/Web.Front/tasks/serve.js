module.exports = function (grunt) {
  grunt.registerTask(
    'serve',
    'serve the local compile application',
    function () {
      var type = (this.args[0] || 'dev');
      var tasks = [];

      if (type === 'dev') {
        tasks = tasks.concat([
          'build:dev',
          'connect:livereload',
          'watch'
        ]);
      }

      if (type === 'prod') {
        tasks = tasks.concat([
          'build:prod',
          'connect:keepalive'
        ]);
      }

      grunt.task.run(tasks);
    });
};
