var gulp = require('gulp'),
    babel = require('gulp-babel'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util');

gulp.task('jsx', function() {
    return gulp.src(['src/components/*.jsx', 'src/components/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['react']
        }))
        //.pipe(concat('components.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('src'));
});

gulp.task('es6', ['jsx'], function() {
    return gulp.src('src/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        //.pipe(concat('components.js'))
        .pipe(sourcemaps.write('maps'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('browserify', ['es6'], function () {
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
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['browserify'], function() {
    gulp.watch(['src/components/*.jsx', 'src/components/*.js'], ['browserify']);
    gulp.watch('src/*.js', ['browserify']);
});

gulp.task('default', ['watch']);