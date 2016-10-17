// including plugins
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require("gulp-minify-css"),
    rename = require('gulp-rename');


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
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('./assets/css/'));
});


//  Task
gulp.task('default', ['compile-sass', 'minify-css']);
