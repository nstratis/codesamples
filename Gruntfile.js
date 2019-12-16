module.exports = (grunt) => {
  // Configure the target parameter
  const target = grunt.option('target') || 'sass:dev';
  // Define the tasks variable
  let tasks = null;
  // Load the Required Grunt task files from the package file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  // grunt.loadNpmTasks('grunt-contrib-uglify-es');

  // Load the package JSON file
  const pkg = grunt.file.readJSON('package.json');
  // Define the config for the Grunt tasks
  const config = {};
  // Determine if the dist target was passed
  if (target === 'code:lint') {
    config.eslint = {
      main: {
        options: {
          configFile: '.eslintrc.js'
        },
        src: [
          'src/**/*.js',
          'test/**/*.js'
        ]
      }
    };
    tasks = ['eslint'];
  } else if (target === 'build:site' || target === 'build:site:local') {
    // TODO
  } else if (target === 'sass:dev') {
    config.pkg = pkg;
    config.sass = {
      dev: {
        options: {
          style: 'expanded',
          lineNumbers: true,
          noCache: true,
          sourcemap: 'none'
        },
        files: {
          'app_template/css/theme-default.css': 'app_template/sass/default.scss'
        }
      }
    };
    tasks = ['sass:dev'];
  } else if (target === 'sass:dist') {
      config.pkg = pkg;
      config.sass = {
      dist: {
        options: {
          style: 'compressed',
          lineNumbers: false,
          noCache: true,
          sourcemap: 'none'
        },
        files: {
          'app_template/css/theme-default.css': 'app_template/sass/default.scss'
        }
      }
    };
    tasks = ['sass:dist'];
  }

  grunt.initConfig(config);
  grunt.log.write('Registering the application build tasks for Project ').ok();
  grunt.registerTask('default', tasks);
};
