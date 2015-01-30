module.exports = function(grunt) {

  grunt.initConfig({

    concat: {
      options: {
        // define a string to put between each file in the concatenated output
        separator: '\n\n'
      }
      , dist: {
        // the files to concatenate
        files: {
          'dist/build.js': ['app/js/namespace.js'
          , 'app/js/*/*.js']

          , 'tests/tests.js': ['tests/js/spec/*.js'
          , 'tests/js/spec/*/*.js']
        }
      }
    }

    , watch: {
      files: ['src/**/**']
      , tasks: ['concat']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concat']);

};