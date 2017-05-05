var gulp = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

var config = {
    bootstrapDir: './bower_components/bootstrap-sass',
    publicDir: './public',
};

gulp.task('css', function() {
    return gulp.src('./css/app.scss')
    .pipe(sass({
        includePaths: [config.bootstrapDir + '/assets/stylesheets'],
    }))
    .pipe(gulp.dest(config.publicDir + '/css'));
});

gulp.task('fonts', function() {
    return gulp.src(config.bootstrapDir + '/assets/fonts/**/*')
    .pipe(gulp.dest(config.publicDir + '/fonts'));
});

gulp.task('js', function() {
    return gulp.src(config.bootstrapDir + '/assets/javascripts/**/*')
    .pipe(gulp.dest(config.publicDir + '/js'));
});

gulp.task('img', function() {
    return gulp.src(config.bootstrapDir + '/assets/images/**/*')
    .pipe(gulp.dest(config.publicDir + '/img'));
});

gulp.task('default', ['css', 'fonts']);

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      // fallback:   'index.html',
      livereload: true,
      directoryListing: true,
      open: true
    }));
});