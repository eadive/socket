/**
 * Created by carlossouza on 3/25/15.
 */

var gulp = require('gulp');

require('./gulp/clean');
require('./gulp/watch');
require('./gulp/test');
require('./gulp/build');
require('./gulp/dist');

gulp.task('default', ['browserify-watch', 'sass-watch', 'imagemin-watch', 'other-assets-watch', 'watch']);
