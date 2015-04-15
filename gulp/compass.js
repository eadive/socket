/**
 * Created by carlossouza on 3/25/15.
 */

var gulp = require('gulp');
var compass = require('gulp-compass');
var concat = concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');

module.exports = gulp.task('compass', function() {
  var appName = require('../package.json').name;
  gulp.src('./app/assets/stylesheets/**/*.scss')
    .pipe(compass({
      css: './public/temp',
      sass: './app/assets/stylesheets',
      image: './app/assets/images'
    }))
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./target/' + appName + '/public/stylesheets'));
});