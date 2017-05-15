var gulp = require('gulp');
var scriptsConfig = require('../config').scripts;
var changed = require('gulp-changed');
var browserSync = require('browser-sync');

gulp.task('js', function () {
  gulp.src(scriptsConfig.src)
    .pipe(changed(scriptsConfig.dest))
    .pipe(gulp.dest(scriptsConfig.dest))
    .pipe(browserSync.reload({
      stream: true
    }));
});
