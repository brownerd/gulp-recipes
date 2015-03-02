// Use LibSass
var gulp           = require('gulp');
var browserSync    = require('browser-sync');
var reload         = browserSync.reload;
var sourcemaps     = require('gulp-sourcemaps');
var please         = require('gulp-pleeease');
var sass           = require('gulp-sass');
var pleaseOptions  = {
  autoprefixer: {
    browsers: ['last 4 version']  // specifiy the browsers to account for
  },
  minifier: false
};

gulp.task('sass', function () {

  return gulp.src('sass/style.scss') // path to your Sass
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(please(pleaseOptions))
    .pipe(gulp.dest('./'))          // Output to the root of your theme directory
    .pipe(reload({ stream: true }));
});

gulp.task('browser-sync', function() {
  browserSync({
    //port: 1110,          // Specify a port if you'd like
    proxy: 'task.wp'       // Enter the local domain name that you are using
  });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
  gulp.watch("sass/**/*.scss", ['sass']);
});
