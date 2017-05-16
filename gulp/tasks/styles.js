var gulp = require('gulp');
var sass = require('gulp-sass');
var stylesConfig  = require('../config').styles;
var handleErrors = require('../util/handleErrors');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var debug = require('gulp-debug');

gulp.task('styles', function () {
    return gulp.src(stylesConfig.src)
        .pipe(sass(stylesConfig.settings))
        .on('error', handleErrors)
        .pipe(sourcemaps.init())
        .pipe(debug({title: 'styles:'}))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer("last 4 versions", "> 1%"))
        .pipe(gulp.dest(stylesConfig.dest))
        .pipe(browserSync.reload({
            stream:true
        }));
});
