/**
 * Created by carlossouza on 3/25/15.
 */

var gulp = require('gulp');
var karma = require('karma').server;
var path = require('path');

module.exports = gulp.task('test', function(done) {
  karma.start({configFile: __dirname + '/../test/config/karma-prod.conf.js'}, done);
});