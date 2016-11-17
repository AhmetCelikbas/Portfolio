// including plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require("gulp-minify-css"),
    rename = require('gulp-rename');


// task
gulp.task('default', function () {
    gulp.src('./assets/scss/styles.scss') // path to your file
    .pipe(sass())
    .pipe(gulp.dest('./assets/css/'))
    .pipe(minifyCss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css/'));
});
