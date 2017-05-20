var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var stylesConfig  = require('../config').styles;
var wiredep = require('wiredep').stream;

gulp.task('wiredep', function() {
  return gulp.src(stylesConfig.proj)
    .pipe(wiredep())
    .pipe(plugins.debug({title: 'wiredep:'}))
    .pipe(plugins.changed(stylesConfig.src, {
        hasChanged: plugins.changed.compareContents
    }))
    .pipe(gulp.dest(stylesConfig.src));
});
