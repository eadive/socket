/**
 * Created by carlossouza on 3/25/15.
 */

var gulp        = require('gulp');
var minifyHTML  = require('gulp-minify-html');
var replace     = require('gulp-replace');

module.exports = gulp.task('htmlmin', function() {
  var appName = require('../package.json').name;
  var tagToRemove = '<script>document.write(\'<script src="http://\' + (location.host || \'localhost\').split(\':\')[0] + \':35729/livereload.js?snipver=1"></\' + \'script>\')</script>';
  return gulp.src('./app/views/**/*.html')
    .pipe(replace(tagToRemove, ''))
    .pipe(minifyHTML({
      conditionals: true,
      spare:true
    }))
    .pipe(gulp.dest('./target/' + appName + '/public/'))
    .pipe(gulp.dest('./target/' + appName + '/app/views'));
});