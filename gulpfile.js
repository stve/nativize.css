const gulp = require('gulp');

gulp.task('lint', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');

  return gulp
    .src('src/*.css')
    .pipe(gulpStylelint({
      reporters: [
        { formatter: 'string', console: true }
      ]
    }));
});

gulp.task('minify', ['lint'], function() {
  const cleanCSS = require('gulp-clean-css');

  return gulp
    .src('src/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist'));
});
