const gulp = require('gulp'),
    less = require('gulp-less'),
    browserSync = require('browser-sync').create(),
    cssbeautify = require('gulp-cssbeautify'),
    ghPages = require('gh-pages'),
    path = require('path'),
    minify = require('gulp-minify')

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    })
})

gulp.task('html', () => {
    return gulp.src('app/*.html')
        .pipe(browserSync.stream())
})

gulp.task('js', () => {
    return gulp.src('app/js/*.js')
        .pipe(browserSync.stream())
})

gulp.task('minjs', () => {
    return gulp.src('app/js/slideBlock.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            ignoreFiles: ['-min.js']
        }))
        .pipe(gulp.dest('app/js/'))
})

gulp.task('less', () => {
    return gulp.src(['app/less/**/*.less', '!app/less/**/_*.less'])
        .pipe(less())
        .pipe(cssbeautify())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
})

gulp.task('deploy', function (cb) {
    ghPages.publish(path.join(process.cwd(), '/app'), cb);
})

gulp.task('watch', () => {
    gulp.watch('app/less/**/*.less', gulp.parallel('less'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/**/*.js', gulp.parallel('js'))
})

gulp.task('default', gulp.parallel('browser-sync', 'watch'))
