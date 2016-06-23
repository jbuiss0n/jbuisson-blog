'use strict';

// grunt-postcss: Apply several post-processors to your CSS using PostCSS

module.exports = {
  autoprefixer: {
    options: {
      map: false,
      failOnError: true,
      processors: [
        require('autoprefixer')({browsers: ['last 2 versions']})
      ]
    },
    src: 'dist/**/*.css'
  }
};
