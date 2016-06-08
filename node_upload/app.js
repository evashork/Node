var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var upload = multer({ dest: 'uploads/' });    // multer 폴더 설정 
var app = express();
// post 설정
app.use(bodyParser.urlencoded({extended:false}));	
// jade 설정
app.set('view engine', 'jade');
app.set('views','./views');             // jade 파일 폴더 설정
app.locals.pretty = true;

app.get('/upload', function (req,res) {
	res.render('upload');
})

app.post('/upload', upload.single('userfile'), function(req,res){
	console.log(req.file);
	res.send('upload : '+req.file.filename);   // file
})

app.listen(3000, function(){
	console.log("3000포트에 연결 성공")
}); // port 설정
