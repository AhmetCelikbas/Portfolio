// including plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require("gulp-minify-css");


// task
gulp.task('compile-sass', function () {
    gulp.src('./assets/scss/styles.scss') // path to your file
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'));
});




// task
gulp.task('minify-css', function () {
    gulp.src('./assets/css/styles.css') // path to your file
    .pipe(minifyCss())
    .pipe(gulp.dest('path/to/destination'));
});
