var gulp    = require('gulp');
var sass    = require('gulp-sass');
var ejs     = require('gulp-ejs');
var watch   = require('gulp-watch');
var copy    = require('gulp-copy');
var browserSync    = require('browser-sync').create();
var gutil = require('gulp-util');

gulp.task('compile', function(){
    gulp.src('./app/pages/**/*.ejs')
        .pipe(ejs({},{
            ext: '.html'
        }).on('error', gutil.log))
    .pipe(gulp.dest('./www'));
});

gulp.task('sass', function () {
  return gulp.src('./app/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./www/css'));
});

gulp.task('js', function() {
    return gulp.src('./app/js/**/*.js')
        .pipe(copy('./www/js'));
});

gulp.task('serve', ['js'], function () {
    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./www/"
        }
    });
    // add browserSync.reload to the tasks array to make
    // all browsers reload after tasks are complete.
    gulp.watch("./app/js/**/*.js", ['js']);
    gulp.watch('./app/scss/**/*.scss', ['sass']);
    gulp.watch('./app/pages/**/*.ejs', ['compile']);
    browserSync.reload();
});