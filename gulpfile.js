var gulp = require('gulp');

gulp.task('copy-lib-js', function () {
    return gulp
        .src([
            'node_modules/bootstrap/dist/js/bootstrap.min.js',
            'node_modules/jquery/dist/jquery.min.js',
            'node_modules/stats.js/build/stats.min.js',
            'node_modules/zrender/dist/zrender.min.js'
        ])
        .pipe(gulp.dest('src/lib/js'));
});

gulp.task('copy-lib-css', function () {
    return gulp
        .src(['node_modules/bootstrap/dist/css/bootstrap.min.css'])
        .pipe(gulp.dest('src/lib/css'));
});

gulp.task('lib', ['copy-lib-js', 'copy-lib-css']);

gulp.task('default', ['lib']);

