var gulp = require('gulp');
var plugins = require('gulp-load-plugins')({camelize: true});
var config = require('../config');
var handleErrors = require('../util/handleErrors');

gulp.task('images', function() {
    return gulp.src(config.images.globs)
        .pipe(plugins.cache(plugins.imagemin(config.images.settings)))
        .on('error', handleErrors)
        .pipe(plugins.debug({title: 'images:'}))
        .pipe(gulp.dest(config.images.dest));
});
