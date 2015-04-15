/**
 * Created by carlossouza on 3/25/15.
 */

var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

module.exports = gulp.task('browserify', function() {
  var appName = require('../package.json').name;
  return browserify('./app/assets/javascripts/app.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./target/' + appName + '/public/javascripts/'));
});
