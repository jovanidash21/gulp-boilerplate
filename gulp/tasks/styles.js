var gulp = require('gulp');
var stylesConfig  = require('../config').styles;
var sass = require('gulp-sass');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync  = require('browser-sync');
var debug = require('gulp-debug');

gulp.task('styles', function () {
    return gulp.src(stylesConfig.src)
        .pipe(sourcemaps.init())
        .pipe(sass(stylesConfigs.settings))
        .pipe(debug({title: 'styles:'}))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer("last 4 versions", "> 1%"))
        .pipe(gulp.dest(stylesConfig.dest))
        .pipe(browserSync.reload({
            stream:true
        }));
});
