module.exports = function(grunt) {
  "use strict";

  var 
  CSS_PATH = 'src/css/',
  DIST_CSS_PATH = 'dist/css/';


  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*!\n' +
              '* Suanzi v<%= pkg.version %> by @spricity and @cicisoso\n' +
              '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              '* Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>\n' +
              '*\n' +
              '* Designed and built with all the love in the world by @spricity and @cicisoso.\n' +
              '*/\n',
    // Task configuration.
   cssPath: CSS_PATH,
   distCssPath: DIST_CSS_PATH,
    clean: {
      dist: ['dist']
    },
    concat: {
    	common_css: {
    		src: ['<%=cssPath%>base.css', '<%=cssPath%>grid.css', '<%=cssPath%>iconfont.css'],
    		dest: '<%=distCssPath%>common.css'
    	},
    	all: {
    		src: ['<%=cssPath%>*.css'],
    		dest: '<%=distCssPath%>szui.css'
    	},
    },
    /**
	 * 对CSS 文件进行压缩
	 * @link https://github.com/gruntjs/grunt-contrib-cssmin
	 */
	cssmin : {
		common : {
			options: { banner: '/* Suanzi ltd. */' },
			files: {'<%=distCssPath%>common-min.css': ['<%=distCssPath%>common.css']}
		},

		all : {
			options: { banner: '<%=banner%>' },
			files: {
     	 		'<%=distCssPath%>szui-min.css': ['<%=cssPath%>*.css']
    		}
		},
	},
    


    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      recess: {
        files: 'less/*.less',
        tasks: ['recess']
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('browserstack-runner');
  grunt.loadNpmTasks('grunt-contrib-cssmin');


  grunt.registerTask('default', ['clean', 'concat:all', 'cssmin:all']);

  //grunt.registerTask('common', ['concat:common_css', 'cssmin:common']);

};