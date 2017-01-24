/*
    This file is only used for the purpose of creating(and minifying) the Critical CSS files.
    All other production is handled by Gulp
*/

module.exports = function(grunt) {
  grunt.initConfig({
    twigRender: {
      your_target: {
        files : [
          {
            data: ['build/_json/single.json', 'build/_json/nav.json'],
            template:  'build/_twig/page.twig',
            dest: 'build/_dirty/single.html' 
          }
        ]
      },
    }
  });

  grunt.loadNpmTasks('grunt-twig-render');
  grunt.registerTask('default', ['twigRender']);

}
