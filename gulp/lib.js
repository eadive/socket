/**
 * Created by carlossouza on 3/26/15.
 */

var gulp  = require('gulp');
var merge = require('merge-stream');
var _     = require('underscore');
var fs    = require('fs');

module.exports = gulp.task('lib', function () {
  var appName = require('../package.json').name;
  // Get dependencies
  var listDepsVersions = JSON.parse(fs.readFileSync('package.json', 'utf8')).dependencies;
  var listDeps = _.map(listDepsVersions, function(version, name) {
    return name;
  });
  // Copy dependencies
  var merged = merge();
  listDeps.forEach(function(m) {
    var src = './node_modules/' + m + '/**/*';
    var dest = './target/' + appName + '/node_modules/' + m;
    var stream = gulp.src(src).pipe(gulp.dest(dest));
    merged.add(stream);
  });
  // Copy bin
  var streamBin = gulp.src('./bin/**/*').pipe(gulp.dest('./target/' + appName + '/bin'));
  merged.add(streamBin);
  // Copy controllers
  var streamControllers = gulp.src('./app/controllers/**/*').pipe(gulp.dest('./target/' + appName + '/app/controllers'));
  merged.add(streamControllers);
  // Copy models
  var streamModels = gulp.src('./app/models/**/*').pipe(gulp.dest('./target/' + appName + '/app/models'));
  merged.add(streamModels);
  // Copy components
  var streamComponents = gulp.src('./app/components/**/*').pipe(gulp.dest('./target/' + appName + '/app/components'));
  merged.add(streamComponents);
  // Copy app
  var streamApp = gulp.src('./app/app.js').pipe(gulp.dest('./target/' + appName + '/app'));
  merged.add(streamApp);

  return merged;
});