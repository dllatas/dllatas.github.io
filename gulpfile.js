var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    cleanCSS = require('gulp-clean-css');

gulp.task('css', function() {
    return gulp.src(['./src/css/bootstrap.min.css', './src/css/bootstrap-theme.min.css',
            './src/css/jumbotron-narrow.css', './src/css/custom-fonts.css', './src/css/main.css'])
        .pipe(concat('main.css'))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('jsx', function() {
    return gulp.src(['src/components/*.jsx', 'src/components/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('src'));
});

gulp.task('es6', gulp.series('jsx', function() {
    return gulp.src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist/js'));
}));

gulp.task('browserify', gulp.series('es6', function() {
    var b = browserify({
        entries: './dist/js/app.js',
        debug: true
    });
    return b.bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/js'));
}));

gulp.task('js-concat', gulp.series('browserify', function() {
    return gulp.src(['./dist/js/vendor/jquery.min.js', './dist/js/vendor/bootstrap.min.js', './dist/js/app.js'])
        .pipe(concat('main.js'))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/'));
}));

gulp.task('watch', gulp.series('js-concat', function() {
    gulp.watch(['src/components/*.jsx', 'src/components/*.js'], ['js-concat']);
    gulp.watch('src/*.js', ['js-concat']);
    gulp.watch('src/css/*.css', ['css']);
}));


gulp.task('default', gulp.series('watch', function(done) {
    done();
}));
//gulp.task('default', ['watch']);