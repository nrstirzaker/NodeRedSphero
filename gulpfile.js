var gulp = require('gulp');
var changed  = require('gulp-changed');

var dest = 'C:/Users/nstirzak/.node-red/nodes';

gulp.task('default', function() {
    gulp.watch('./*.js', ['copy-folder']);
});

gulp.task('copy-folder', function() {
    gulp.src('./*.js')
        .pipe(changed(dest))
        .pipe(gulp.dest(dest));
});