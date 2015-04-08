/**
 * Created by carlossouza on 3/26/15.
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var livereload = require('gulp-livereload');

module.exports = gulp.task('sass-watch', function () {
  var appName = require('../package.json').name;
  gulp.src('./app/assets/stylesheets/**/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(livereload());
});