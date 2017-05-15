var gulp = require('gulp');
var configScripts = require('../config').scripts;
var changed = require('gulp-changed');
var browserSync = require('browser-sync');

gulp.task('js', function () {
  gulp.src(configScripts.src)
    .pipe(changed(configScripts.dest))
    .pipe(gulp.dest(configScripts.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
