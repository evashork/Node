var gulp 		= require('gulp'),
		concat 	= require('gulp-concat')
		uglify 	= require('gulp-uglify');

// gulp combine:js
gulp.task('combine:js' ,function () {
	gulp
		.src(['./src/*.js'])            // 적용할 js가 있는 곳
		.pipe(concat('combined.js'))    // 만들어질 js 파일 이름
		.pipe(uglify({									// 옵션을 사용하지 않으려면 옵션 설정을 지운다
			mangle:false,              		// 변수 및 매개 변수 등을 알파벳 한글자로 변환
			preserveComments:'all'				// 주석 설정 all 일 경우 주석값이 보존되고 some 일 경우 !느낌표가 있는 주석만 보존 된다.
		}))
		.pipe(gulp.dest('./dist'));     // 출력 될 폴더
});

gulp.task('default',function() {
	console.log('gulp가 실행 되었습니다.')
});
