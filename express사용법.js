/* express 사용법 */
var express = require('express');
var app = express();

// public 폴더 만들기
app.use(express.static('public'));  // 파일들이 위치할 public 폴더를 만든다.

// URL 경로 설정
app.get('/', function(req, res){
	res.send('Hello home page');
}); 
app.get('/login',function(req,res){
	res.send('로그인이 필요합니다.');
});
// URL 경로 설정 - 쿼리스트링    http://localhost:3000/topic?id=2
app.get('/topic', function(req, res){
	res.send(req.query.id);  // 쿼리스트링 req.query
	res.send(req.query.id + ',' +req.query.name)
});

// URL 경로 설정 - 시멘틱URL  http://localhost:3000/topic/2/
app.get('/topic/:id', function(req, res){
	res.send(req.params.id);  
});
// URL 경로 설정 - 시멘틱URL 다단계  http://localhost:3000/topic/2/taco
app.get('/topic/:id:/:mode', function(req, res){
	res.send(req.params.id+ ',' +req.params.mode);  
});

// post 방식


app.listen(3000, function(){
	console.log("3000포트에 연결 성공")
}); // port 설정

// 동적 웹페이지 만들기
app.get('/dynamic', function(req,res){
	var lis = '';
	for(var i=0; i<5; i++){
		lis = lis + '<li>coding</li>'
	};
	var output =
	`<!DOCTYPE html>
	<html lang="ko">
	<head>
		<meta charset="UTF-8">
		<title>Document</title>
	</head>
	<body>
		<h1>Hello Dynamic</h1>
		<ul>
			${lis}
		</ul>
	</body>
	</html>
	`;
	res.send(output);
});
