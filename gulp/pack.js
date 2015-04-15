/**
 * Created by carlossouza on 3/26/15.
 */

var gulp = require('gulp');
var zip = require('gulp-zip');

module.exports = gulp.task('pack', function() {
  return gulp.src('./target/**/*')
    .pipe(zip('distribution.zip'))
    .pipe(gulp.dest('./target/'));
});