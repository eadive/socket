/**
 * Created by carlossouza on 3/25/15.
 */

var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(cb) {
  del(['./target/**/*', './public/**/*'], cb);
});