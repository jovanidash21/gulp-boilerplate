var gulp = require('gulp');
var stylesConfig  = require('../config').styles;
var wiredep = require('wiredep').stream;
var debug = require('gulp-debug');
var changed = require('gulp-changed');

gulp.task('wiredep', function() {
  return gulp.src(stylesConfig.proj)
    .pipe(wiredep())
    .pipe(debug({title: 'wiredep:'}))
    .pipe(changed(stylesConfig.src, {
      hasChanged: changed.compareContents
    }))
    .pipe(gulp.dest(stylesConfig.src));
});
