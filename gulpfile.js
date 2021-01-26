var gulp = require('gulp');
var sass = require('gulp-sass');
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

gulp.task('build', async function () {
  gulp.src('./src/js/*.js')
    .pipe(await babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('./dist/js'))
  gulp.src('./src/scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
})

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
})