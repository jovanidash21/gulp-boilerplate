var gulp = require('gulp');
var configStyles  = require('../config').styles;
var sass = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var debug = require('gulp-debug');

gulp.task('styles', function () {
    return gulp.src(configStyles.src)
        .pipe(sourcemaps.init())
        .pipe(sass(configStyles.settings))
        .pipe(debug({title: 'styles:'}))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer("last 4 versions", "> 1%"))
        .pipe(gulp.dest(configStyles.dest))
        .pipe(browserSync.reload({
            stream:true
        }));
});