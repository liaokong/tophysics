var gulp = require('gulp');
var scss = require('gulp-sass');
var path = require('path');

gulp.task('scss', function () {
    return gulp.src('./plugs/scss/*.scss')
               .pipe(scss())
               .pipe(gulp.dest('./plugs/css'));
});


gulp.task('watch', function () {
    gulp.watch('./plugs/scss/**/*.scss', function () {
        gulp.run('scss');
    });
});

gulp.task('default', ['watch']);