var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

mongoose.connect("");
var db = mongoose.connection;

db.once("open",function(){
  console.log("DB connected");
});

db.on("error",function(err){
  console.log("DB error : ", err);
});

// 오브젝트를 스키마로 만든다
var dataSchema = mongoose.Schema({
  name:String,   // 이름과 타입
  count:Number
});

// 모델을 담는 변수는 첫글자가 대문자로 쓴다. mongoose.model() 함수는
// 두개의 인자를 받는데 첫번째 인자는 문자열로 데이터베이스에 연결될 collection의 단수 이름이고
// 두번째 인자는 mongoose.Schema() 함수로 생성된 스키마 변수이다.
// 모델 이름은 항상 단수이고 collection의 이름은 항상 복수 이다.
var Data = mongoose.model('data',dataSchema);
// datas collection에 name이 "myData"인 것을 찾고 없으면 하나 만ㄴ든다.
Data.findOne({name:"myData"},function(err,data){
  if(err) return console.log("Data ERROR:",err);

  if(!data){
    Data.create({name:"myData",count:0},function(err,data){
      if (err) return console.log("Data ERROR:",err);
      console.log("Counter initialized :",data);
    });
  }
});


// ejs 설정
app.set("view engine",'ejs');
app.use(express.static(path.join(__dirname,'public')));

//var data={count:0}; // 서버에 저장되며, 서버가 종료 될 때까지 값을 유지한다.

// get(브라우저로 페이지를 여는 경우 get신호로 요청request하게 된다)하면
// render하여 응답(response)한다
app.get('/',function(req,res){
  // 이름이 myData인 테이터를 찾는다.
  Data.findOne({name:"myData"},function(err,data){
    if(err) return console.log("Data ERROR:",err);
    data.count++;
    data.save(function(err){
      if(err) return console.log("Data ERROR:",err);
      res.render('my_first_ejs',data);
    });
  });
});

// data의 값을 0으로 바꾼다.
app.get('/reset',function(req,res){
  setCounter(res,0);
});

// request에 count query가 있는지 확인하고 있다면 값을 data에 대입한다.
// query는 주소표시줄에 ?,&를 사용하여 값을 넣는 것이다.
app.get('/set/count',function(req,res){
  if(req.query.count) setCounter(res,req.query.count);
  else getCounter(res);
});

// :num 처럼 route에 :이 오면 placeholder가 된다. 주소줄의 변수 선언
// /set/3
app.get('/set/:num',function(req,res){
  if(req.params.num) setCounter(res,req.params.num);
  else getCounter(res);
});

function setCounter(res,num) {
  console.log("setCounter");
  Data.findOne({name:"myData"},function(err,data) {
    if(err) return console.log("Data ERROR:",err);
    data.count=num;
    data.save(function(err){
      if(err) return console.log("Data ERROR:",err);
      res.render('my_first_ejs',data);
    });
  });
}

function  getCounter(res){
  console.log("getCounter");
  Data.findOne({name:"myData"},function(err,data){
    if(err) return console.log("Data ERROR",err);
    res.render('my_first_ejs',data);
  });
}

app.listen(3000,function(){
  console.log('Sever On!');
});
