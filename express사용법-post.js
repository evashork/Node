/* express 사용법 */
var express = require('express');
/* npm install body-parser --save */
var bodyParser = require('body-parser');				// ****post 사용시 필요 미들웨어설정
var app = express();

// jade 설정
app.set('view engine', 'jade');
app.set('views','./views');             // jade 파일 폴더 설정
app.locals.pretty = true;

// public 폴더 만들기
app.use(express.static('public'));  // 파일들이 위치할 public 폴더를 만든다. 
app.use(bodyParser.urlencoded({extended:false}));			//  ****post 사용시 필요 미들웨어 설정

app.get('/form',function(req,res){
	res.render('form');
});

app.post('/form_receiver', function(req,res){
	var title = req.body.title;
	var description = req.body.description;
	res.send(title+','+description);
});


app.listen(3000, function(){
	console.log("3000포트에 연결 성공")
}); // port 설정


