// Use Ruby Sass

var gulp          = require('gulp');
var sourcemaps    = require('gulp-sourcemaps');
var browserSync   = require('browser-sync');
var reload        = browserSync.reload;
var sass          = require('gulp-ruby-sass');
var please        = require('gulp-pleeease');
var pleaseOptions = {
    autoprefixer: {
      browsers: ['last 4 version'] // specifiy the browsers to account for
    },
      minifier: false
    };

gulp.task('sass', function() {
  return sass('sass/style.scss', { sourcemap: true }) // path to your Sass
  .on('error', function (err) {
    console.error('Error', err.message);
  })

  .pipe(sourcemaps.write())
  .pipe(please(pleaseOptions))
  .pipe(gulp.dest('./'))  // Output to the root of your theme directory
  .pipe(reload({ stream: true }));
});

gulp.task('browser-sync', function() {
  browserSync({
    //port: 1110,         // Specify a port if you'd like
    proxy: 'task.wp'      // Enter the local domain name that you are using
  });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("sass/**/*.scss", ['sass']);
});
