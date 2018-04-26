const gulp = require('gulp');
const babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); 
var sourcemaps = require('gulp-sourcemaps');
var cssmin = require('gulp-cssmin');
var del = require('del');
var gutil = require('gulp-util');




var paths = {
	scripts : ['public/js/**/*.js'],
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
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(concat('main.min.js'))
		//.pipe(uglify())
		.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
		.pipe(sourcemaps.write())
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.styles, ['css']);
});

gulp.task('default', [ 'watch', 'scripts','css']);