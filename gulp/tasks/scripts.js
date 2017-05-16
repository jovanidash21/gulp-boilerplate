var gulp = require('gulp');
var scriptsConfig = require('../config').scripts;
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync');

gulp.task('scripts', function() {
  return gulp.src(scriptsConfig.src)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest(scriptsConfig.dest))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest(scriptsConfig.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
