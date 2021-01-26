var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
var babel = require('gulp-babel')

sass.compiler = require('node-sass');

gulp.task('scss', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('js', async function () {
  gulp.src('./src/js/*.js')
    .pipe(await babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/js'))
})

gulp.task('image', async function () {
  gulp.src('./assets/**')
    .pipe(await gulp.dest('./dist/assets/'))
})

gulp.task('build', async function () {
  gulp.src('./src/js/*.js')
    .pipe(await babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/src/js'))
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/src/css'));
  gulp.src('./index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'))
  gulp.src('./assets/**')
    .pipe(await gulp.dest('./dist/assets/'))
})

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
})