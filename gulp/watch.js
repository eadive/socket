/**
 * Created by carlossouza on 3/25/15.
 */

var gulp = require('gulp');
var livereload  = require('gulp-livereload');
require('./sass-watch');
require('./browserify-watch');
require('./html-watch');
require('./imagemin-watch');
require('./other-assets-watch');

module.exports = gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./app/assets/stylesheets/**/*.scss', ['sass-watch']);
  gulp.watch('./app/views/**/*.html', ['html-watch']);
  gulp.watch('./app/images/**/*', ['imagemin-watch']);
  gulp.watch('./app/videos/**/*', ['other-assets-watch']);
});