const {src, series, dest, watch} = require('gulp');
//const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


//compile sass to css and move to dist
function scssTask(){
    return src('./src/sass/**/*.scss')
        .pipe(sass())
        .pipe(dest('dist/css'));
}

//copy and move html to dist
function copyHtml(){
    return src('./src/*.html')
        .pipe(dest('dist'));
}

//config browserSync
function browserSyncServe(cb){
    browserSync.init({
        server: {
            baseDir: './dist/'
        }
    });
    cb();
}

//Reload browser
function browserSyncReload(cb){
    browserSync.reload();
    cb();
}

//watch tasks
function watchTask(){
    watch('./src/*.html', series(browserSyncReload, copyHtml));
    watch(['./src/sass/**/*.scss'], series(scssTask, browserSyncReload));
}

exports.default = series(
    scssTask, 
    copyHtml,
    browserSyncServe,
    watchTask
);


// exports.watch = series(
//     exports.default,
//     watch
// );