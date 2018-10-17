const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssMin = require('gulp-css');

sass.compiler = require('node-sass');

gulp.task('css', () => {
    return gulp.src(['src/**/*.css'])
        .pipe(cssMin())
        .pipe(gulp.dest('dist'))
});

gulp.task('sass', () => {
    return gulp.src(['src/**/*.sass', 'src/**/*.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
    gulp.watch(
        ['src/**/*.sass', 'src/**/*.scss', 'src/**/*.css'],
        ['sass', 'css']
    )
});

gulp.task('default', () => {
    gulp.run('watch')
});


