/**
 * Created by carlossouza on 3/25/15.
 */
var gulp = require('gulp');
var compass = require('gulp-compass');
var concat = concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var livereload = require('gulp-livereload');

module.exports = gulp.task('compass-watch', function() {
  gulp.src('./app/assets/stylesheets/**/*.scss')
    .pipe(compass({
      css: './public/temp',
      sass: './app/assets/stylesheets',
      image: './app/assets/images'
    }))
    .pipe(concat('style.css'))
    //.pipe(minifyCSS())
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(livereload());
});
