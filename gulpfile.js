var gulp = require('gulp'),
    watch = require('gulp-watch'),
    fileinclude = require('gulp-file-include'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    combineMq = require('gulp-combine-mq');

//paths
var html_build = 'build/_html/_templates/**/*.html',
    html_build_watch = 'build/_html/**/*.html',
    html_output = 'public/';


gulp.task('fileinclude', function() {
  gulp.src([html_build])
    .pipe(plumber())
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(html_output));
});

gulp.task('combineMq', function () {
    return gulp.src('build/_temp/screen.css')
    .pipe(combineMq({
        beautify: true
    }))
    .pipe(gulp.dest('build/_temp/'));
});

gulp.task('watch', function(){
  gulp.watch(html_build_watch, ['fileinclude']);
});

gulp.task('default',['watch']);

