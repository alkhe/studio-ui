const gulp = require('gulp'),
	cssnext = require('gulp-cssnext'),
	jade = require('gulp-jade');

	src = './css/**/*.css',
	dst = './dist',

	jsrc = './index.jade',
	here = './';

gulp.task('default', ['watch']);

gulp.task('watch', function() {
	gulp.watch([src, jsrc], ['compile']);
});

gulp.task('compile', function() {
	gulp.src(src)
		.pipe(cssnext())
		.pipe(gulp.dest(dst));

	gulp.src(jsrc)
		.pipe(jade())
		.pipe(gulp.dest(here));
});

gulp.task('build', function() {
	gulp.src(src)
		.pipe(cssnext({
			compress: true
		}))
		.pipe(gulp.dest(dst));
});
