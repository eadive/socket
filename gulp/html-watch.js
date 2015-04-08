/**
 * Created by carlossouza on 3/26/15.
 */

var gulp = require('gulp');
var livereload = require('gulp-livereload');

module.exports = gulp.task('html-watch', function() {
  return gulp.src('./app/views/**/*.html')
    .pipe(livereload());
});
