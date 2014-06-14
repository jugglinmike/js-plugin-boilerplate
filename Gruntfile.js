/* jshint node:true */
module.exports = function( grunt ) {
	// Load tasks.
	require( 'matchdep' ).filterDev( 'grunt-*').forEach( grunt.loadNpmTasks );

	grunt.initConfig({
		pkg: grunt.file.readJSON( 'package.json' ),
		jshint: {
			options: grunt.file.readJSON( '.jshintrc' ),
			grunt: {
				src: [ 'Gruntfile.js' ]
			},
			tests: {
				src: [
					'tests/**/*.js'
				],
				options: grunt.file.readJSON( 'tests/.jshintrc' )
			},
			core: {
				src: [
					'js/*.js'
				]
			}
		},
		uglify: {
			js: {
				options: {
					sourceMap: true
				},
				files: {
					'build/js/wp-api.min.js': [
						'js/app.js',
						'js/utils.js',
						'js/models.js',
						'js/views.js',
						'js/collections.js'
					]
				}
			}
		},
		concat: {
			js: {
				src: [
					'js/app.js',
					'js/utils.js',
					'js/models.js',
					'js/views.js',
					'js/collections.js'
				],
				dest: 'build/js/wp-api.js'
			}
		},
		qunit: {
			all: [ 'tests/*.html' ]
		},
		watch: {
			files: [
				'js/*.js'
			],
			tasks: [ 'uglify' ]
		}
	});
	grunt.loadNpmTasks( 'grunt-contrib-jshint' );
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );
	grunt.loadNpmTasks( 'grunt-contrib-concat' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );
	grunt.loadNpmTasks( 'grunt-contrib-qunit' );
	grunt.registerTask( 'default', [ 'jshint', 'uglify:js', 'concat:js' ] );
	grunt.registerTask( 'test', [ 'qunit:all' ] );
};
