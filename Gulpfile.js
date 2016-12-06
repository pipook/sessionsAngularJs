// File: Gulpfile.js
'use strict';
var gulp 				= require('gulp'),
	connect 			= require('gulp-connect'),
	stylus 				= require('gulp-stylus'),
	nib 				= require('nib'),
	jshint 				= require('gulp-jshint'),
	stylish 			= require('jshint-stylish'),
	inject 				= require('gulp-inject');


//Servidor web de desarrollo
gulp.task('server', function(){
	connect.server({
		root: './app',
		hostname: '0.0.0.0',
		port: 8080,
		livereload: true
	});
});


//Recarga el navegador cuando hay cambios en el HTML
gulp.task('html', function(){
	gulp.src('./app/**/*.html')
		.pipe(connect.reload());
});

//Preprocesa archivos stylus a CSS y recarga los cambios
gulp.task('css', function(){
	gulp.src('./app/css/*.styl')
		.pipe(stylus({ use: nib() }))
		.pipe(gulp.dest('./app/css'))
		.pipe(connect.reload());
});


//Busca en las carpetas de estilos y javascript los archivos que hayamos creado
//para inyectarlos en el index.html
gulp.task('inject', function() {
	var sources = gulp.src(['./app/js/**/*.js', './app/css/**/*.css'], { read: false });
	return gulp.src('index.html', { cwd: './app'})
			   .pipe(inject(sources, { relative: true }))
			   .pipe(gulp.dest('./app'));
});


//Busca errores en el JS y nos los muestra por pantalla
gulp.task('jshint', function() {
	return gulp.src('./app/scripts/**/*.js')
			   .pipe(jshint('.jshintrc'))
			   .pipe(jshint.reporter('jshint-stylish'))
			   .pipe(jshint.reporter('fail'));
});


//Vigila cambios que se produzcan en el codigo
//y lanza las tareas relacionadas
gulp.task('watch', function(){
	gulp.watch(['./app/**/*.html'], ['html']);
	gulp.watch(['./app/css/**/*.styl'], ['css', 'inject']);
	gulp.watch(['./app/js/**/*.js', './Gulpfile.js'], ['jshint', 'inject']);
});

gulp.task('default', ['server', 'inject', 'watch']);