var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

app.set('view engine', 'jade');
app.set('views','./views');             // jade 파일 폴더 설정
app.locals.pretty = true;
// body-parser 설정  
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(3000, function(){
	console.log("3000포트에 연결 성공");
})

app.get("/topic", function(req,res){
	fs.readdir('data', function(err, files){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
		res.render('view', {topics:files});   // topics에 파일들의 담아서 전달
	})
})

app.get("/topic/new", function(req,res){
	res.render("form");
})

app.get('/topic/:id', function(req,res){
	var id = req.params.id;
	fs.readdir('data', function(err, files){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
		fs.readFile('data/'+id, 'utf8', function(err, data){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
			}
			res.render('view', {topics:files, title:id, blabla:data});   // topics와 상세페이지 데이타를 담아서 전달
		})
	})
})



app.post("/topic", function(req,res){
	var title = req.body.title;
	var blabla = req.body.blabla;

	// 파일로 내용을 저장
	fs.writeFile('data/' + title, blabla, function(err){
		if(err){
			console.log(err);
			res.status(500).send('Internal Server Error');
		}
		res.send('파일 저장 완료');
	});
})