var gulp = require('gulp'),
	connect = require('gulp-connect');

gulp.task('webserver', function() {
	connect.server({
		livereload: true,
		root: [__dirname] + "/build"
	});
});

gulp.task('default', ['webserver'], function() {
	// place code for your default task here
});