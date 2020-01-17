var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('styles', function () {
  return gulp.src('./github.user.less')
    .pipe(less())
    .pipe(gulp.dest('./build'))
});

gulp.task('default', gulp.series('styles'));
