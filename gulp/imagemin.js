/**
 * Created by carlossouza on 3/27/15.
 */

var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var livereload  = require('gulp-livereload');

module.exports = gulp.task('imagemin', function() {
  var appName = require('../package.json').name;
  return gulp.src('./app/assets/images/**/*')
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('./target/' + appName + '/public/images/'));
});