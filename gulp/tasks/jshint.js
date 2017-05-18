var gulp = require('gulp');
var scriptsConfig = require('../config').scripts;
var jshint = require('gulp-jshint');
var debug = require('gulp-debug');
var concat = require('gulp-concat');

gulp.task('jshint', function() {
  return gulp.src(scriptsConfig.src)
    .pipe(jshint('.jshintrc'))
    .pipe(debug({title: 'jshint:'}))
    .pipe(concat('main.js'))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.jshint.reporter('fail'));
});
