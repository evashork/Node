var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('connect-flash');
var async = require('async');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


// database
mongoose.connect("");
var db = mongoose.connection;

db.once("open",function(){
  console.log("DB connected");
});

db.on("error",function(err){
  console.log("DB error : ", err);
});

// ejs veiw 설정
app.set("view engine",'ejs');

// 미들웨어 -- app.post 보다 위에 있어야 한다.
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json()); // app.post 보다 위에 있어야 한다.
app.use(bodyParser.urlencoded({extended:true})); // url로 데이터랄 받기 위해 필요하다.
app.use(methodOverride("_method")); // delete 작업을 위한
app.use(flash());
app.use(session({secret:'MySecret'}));  // 로그인 유지 암호화

// passport
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', require('./routes/home'));
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));

// start 서버
app.listen(3000,function(){
  console.log('Sever On!');
});
