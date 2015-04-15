/**
 * Created by carlossouza on 3/27/15.
 */

var gulp = require('gulp');
var livereload = require('gulp-livereload');

module.exports = gulp.task('other-assets-watch', function() {
  return gulp.src('./app/assets/videos/**/*')
    .pipe(gulp.dest('./public/videos'))
    .pipe(livereload());
});