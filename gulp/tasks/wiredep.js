var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config  = require('../config');
var wiredep = require('wiredep').stream;

gulp.task('wiredep', function() {
  return gulp.src(config.styles.proj)
    .pipe(wiredep())
    .pipe(plugins.debug({title: 'wiredep:'}))
    .pipe(plugins.changed(config.styles.src, {
        hasChanged: plugins.changed.compareContents
    }))
    .pipe(gulp.dest(config.styles.src));
});
