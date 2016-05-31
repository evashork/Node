/* express 사용법 */
var express = require('express');
var app = express();

// jade 설정
app.set('view engine', 'jade');       // jade 사용 선언
app.set('views','./views');             // jade 폴더 설정
app.locals.pretty = true;

// URL 경로 설정
app.get('/template', function(req, res){	// template로 접속 할 경우
	res.render('temp');			// views 에 있는 temp.jade 파일을 연다.
	res.render('temp', {time:Date()});	// 변수를 전달한다.
	res.render('temp', {time:Date(), _title:'jade'});
});


