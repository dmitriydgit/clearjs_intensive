const gulp = require('gulp');
var rollup = require('gulp-better-rollup')
var babel = require('rollup-plugin-babel')
var concat = require('gulp-concat');
let uglify = require('gulp-uglify-es').default;
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var del = require('del');
var gutil = require('gulp-util');




var paths = {
	scripts : ['public/js/gallery/*.js',
	'public/js/login/*.js', 
	'public/js/mainPage/*.js', 
	'public/js/profile/*.js', 
	'public/js/general/*.js',
	'public/js/app.js', 
	'public/js/router.js',
	'public/js/app.js', 
	'public/js/utils.js'
],
	styles : ['public/css/*.css']
}


gulp.task('clean', function(){
  return del(['build']);
});

gulp.task('css', function(){
  return gulp.src(paths.styles)
		.pipe(concat('main.min.css'))
		.pipe(sourcemaps.init())	 
		.pipe(cssmin())
		.pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'));
});


gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(sourcemaps.init())
		.pipe(rollup({plugins: [babel()]}, 'iife'))
		.pipe(concat('app.min.js'))
		.pipe(uglify())
		//.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
		.pipe(sourcemaps.write())
    .pipe(gulp.dest('public/build/js'));
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['css']);
});

gulp.task('default', [ 'watch', 'scripts','css']);