const {src, dest, parallel, series, watch} = require('gulp');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const babel = require("gulp-babel");
const imagemin = require('gulp-imagemin');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');

//Filepaths
const files = {
    htmlPath: "src/**/*.html",
    jsPath: "src/js/*.js",
    imagePath: "src/images/*",
    sassPath: "src/sass/*",
}

//html-task: copy all html-files
function copyHTML() {
    return src(files.htmlPath)
    .pipe(dest('pub'));
}

//sass-task: copy the sass files and convert them to css.
function sassTask() {
    return src(files.sassPath)
        .pipe(sass().on("error", sass.logError))
        .pipe(dest("pub/css"))
        .pipe(concat('sass.css'))
        .pipe(cssnano())
        .pipe(sourcemaps.write('../maps'))
        .pipe(browserSync.stream());
}

//js-task: copy the js files and compress them
function jsTask() {
    return src(files.jsPath)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(terser())
    .pipe(sourcemaps.write('../maps'))
    .pipe(dest('pub/js'));
}

//images-task: copy images and make them smaller
function imageTask() {
    return src(files.imagePath)
    .pipe(imagemin())
    .pipe(dest('pub/images'));
}

//watch-task: check if the files has changed
function watchTask() {
    browserSync.init({
        server: "./pub"
    });
      
    watch([files.htmlPath, files.jsPath, files.sassPath, files.jsPath, files.imagePath], 
        parallel(copyHTML, jsTask, sassTask, jsTask, imageTask)).on('change',browserSync.reload);
}

exports.default = series(
    parallel(copyHTML, sassTask, jsTask ,imageTask),
    watchTask
);

