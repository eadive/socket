/**
 * Created by carlossouza on 3/26/15.
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');
require('./build');
require('./pack');

module.exports = gulp.task('dist', function(cb) {
  runSequence('build', ['pack'], cb);
});
