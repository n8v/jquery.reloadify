/*global module:false*/
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    qunit: {
      files: ['test/**/jquery.reloadify.html']
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'default'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        smarttabs: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
          browser: true,
          devel: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {}//,
    // reloadify: {
    //  file: 'reloadify.txt'
    // }
  });

  // Example for using this plugin with grunt
  grunt.registerTask(
    'reloadify', 
    'Update a file named "reloadify" for use with jquery.reloadify.', 
    function() {
      var f = grunt.config('reloadify.file') || './reloadify.txt';
      grunt.log.writeln('Updating the "' + f + '" file.');
      var d = new Date();
      grunt.file.write(f, d.toISOString());
    });

  // Default task.
  grunt.registerTask('default', 'lint qunit concat min reloadify');

};
