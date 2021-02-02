//const gulp = require('gulp');
const {src, series, dest, watch} = require('gulp');
const sass = require('gulp-sass');
const prefix = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();


//compile sass to css and move to dist
function scssTask(){
    return src('./src/sass/main.scss')
        .pipe(sass())
        .pipe(prefix('last 2 version'))
        .pipe(dest('dist/css'));
}

//compress png files and move to dist
function pngTask(){
    return src('./src/images/*.png')
        .pipe(imagemin({
            optimizationLevel: 5
        }))
        .pipe(dest('dist/images'));
}

//compress svg files and move to dist
function svgTask(){
    return src('./src/svg/*.svg')
        .pipe(imagemin({
            svgoPlugins: [
                {
                    removeViewBox: true
                }
            ]
        }))
        .pipe(dest('dist/svg'));
}

//copy html and move to dist
function copyHtml(){
    return src('./src/*.html')
        .pipe(dest('dist'));
}

function jsTask(){
    return src('./src/js/*.js')
        .pipe(concat('all.js'))
        .pipe(dest('dist/js'));
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
    watch(['./src/sass/**/*.scss'], series(scssTask, jsTask, browserSyncReload));
}

exports.default = series(
    scssTask,
    jsTask,
    // pngTask,
    // svgTask,
    copyHtml,
    browserSyncServe,
    watchTask
);


// exports.watch = series(
//     exports.default,
//     watch
// );