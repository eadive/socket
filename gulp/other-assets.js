/**
 * Created by carlossouza on 3/27/15.
 */

var gulp = require('gulp');

module.exports = gulp.task('other-assets', function() {
  var appName = require('../package.json').name;
  return gulp.src('./app/assets/videos/**/*')
    .pipe(gulp.dest('./target/' + appName + '/public/videos'));

});