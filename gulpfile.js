var gulp = require('gulp')
  , seq = require('run-sequence')
  , config = require('./build/config')
  , plugins = require('gulp-load-plugins')
  , gulpTaskList = require('fs').readdirSync('./build/tasks/')
  ;

plugins = {
    clean: require('gulp-clean'),
    inject: require('gulp-inject')
};


gulpTaskList.forEach(function(taskfile) {
    require('./build/tasks/' + taskfile)(gulp, plugins, config);
});

gulp.task('default',function(){
     seq('clean','webpack','manifest');
});
