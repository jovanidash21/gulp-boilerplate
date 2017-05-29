var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function () {
    gulp.watch([config.assets + 'styles/**/*'], ['styles']);
    gulp.watch([config.assets + 'scripts/**/*'], ['jshint', 'scripts']);
    gulp.watch([config.assets + 'fonts/**/*'], ['fonts']);
    gulp.watch([config.assets + 'images/**/*'], ['images']);
    gulp.watch(['bower.json', 'assets/manifest.json'], ['build']);
});
