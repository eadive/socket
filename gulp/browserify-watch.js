/**
 * Created by carlossouza on 3/25/15.
 */

var gulp = require('gulp');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var watchify = require('watchify');
var livereload = require('gulp-livereload');

function browserifyShare(){
  // you need to pass these three config option to browserify
  var b = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true
  });
  b = watchify(b);
  b.on('update', function(){
    bundleShare(b);
  });

  b.add('./app/assets/javascripts/app.js');
  bundleShare(b);
}

function bundleShare(b) {
  b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/javascripts'))
    .pipe(livereload());
}

module.exports = gulp.task('browserify-watch', function(){
  browserifyShare();
});