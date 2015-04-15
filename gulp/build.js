/**
 * Created by carlossouza on 3/26/15.
 */

var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
require('./browserify');
require('./sass');
require('./htmlmin');
require('./imagemin');
require('./other-assets');
require('./lib');
require('./pack');

module.exports = gulp.task('build', function(cb) {
  return runSequence('clean', ['browserify', 'sass', 'htmlmin', 'imagemin', 'other-assets', 'lib'], 'pack');
});
