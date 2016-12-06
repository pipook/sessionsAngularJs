// File: Gulpfile.js
'use strict';
var gulp 				= require('gulp'),
	connect 			= require('gulp-connect');


//Servidor web de desarrollo
gulp.task('server', function(){
	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true
	});
});