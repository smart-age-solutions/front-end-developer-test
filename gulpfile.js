const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const minify = require('gulp-minify');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const webserver = require('gulp-webserver');
const babel = require('gulp-babel');

gulp.task('default', ['webserver', 'sass', 'imagemin', 'watch', 'compress', 'htmlmin']);

gulp.task('sass', function () {
  return gulp.src('assets/styles/**/*.scss')
    .pipe(concat('style.min.css'))
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest('public/assets/styles/'))
    .pipe(livereload());
});

gulp.task('compress', function () {
  gulp.src('assets/scripts/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(minify({
      ext: {
        src: '-debug.js',
        min: '-min.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.combo.js', '-min.js']
    }))
    .pipe(gulp.dest('public/assets/scripts/'))
    .pipe(livereload());
});

gulp.task('htmlmin', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
});

gulp.task('imagemin', function(){
	return gulp.src('assets/images/*')
	.pipe(imagemin())
	.pipe(gulp.dest('public/assets/images/'));
});	

gulp.task('watch', function () {
  gulp.watch('assets/styles/**/*.scss', ['sass']);
  gulp.watch('assets/scripts/*.js', ['compress']);
  gulp.watch('*.html');
	livereload.listen();
});

gulp.task('webserver', ['watch'], function () {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
    }))
});