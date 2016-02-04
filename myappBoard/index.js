var express = require('express');
var path = require('path');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

mongoose.connect("");
var db = mongoose.connection;

db.once("open",function(){
  console.log("DB connected");
});

db.on("error",function(err){
  console.log("DB error : ", err);
});

// 모델 설정
var postSchema = mongoose.Schema({
  title: {type:String, required:true},       // 제목
  body: {type:String, required:true},        // 본문
  createdAt: {type:Date, default:Date.now},  // 생성시간
  updatedAt: Date                            // 수정시간
});

var Post = mongoose.model('post',postSchema);

// ejs veiw 설정
app.set("view engine",'ejs');

// 미들웨어 -- app.post 보다 위에 있어야 한다.
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json()); // app.post 보다 위에 있어야 한다.
app.use(bodyParser.urlencoded({extended:true})); // url로 데이터랄 받기 위해 필요하다.
app.use(methodOverride("_method")); // delete 작업을 위한

// set routes
// Get 신호로 /posts 에 접속하는 경우 게시글(Post)데이터의 모든 데이터를 찾고 Post.find({}
// 빈 객체를 전달하는 경우 에러가 있다면 에러를, 에러가 없다면 모든 게시글(posts)를 response 한다.
// find 로 찾고 sort 로 정령하고 exec로 함수를 수정한다. -createdAt 역방향 정렬이다.
app.get('/posts', function(req,res){
  Post.find({}).sort('-createdAt').exec(function(err,posts){
    if(err) return res.json({success:false, message:err});
    res.render("posts/index",{data:posts});
  });
}); // index
app.get('/posts/new', function(req,res){
  res.render("posts/new");
}); // new
// Post 신호로 /posts 에 접속하는 경우 요청신호의 body의 post 항목(req.body.post)로 데이터를 생성(Post.create())
// 에러가 있으면 에러를, 에러가 없다면 새 게시글(post)를 response 한다.
app.post('/posts',function(req,res){
  Post.create(req.body.post,function(err,post){
    if(err) return res.json({success:false, message:err});
    res.redirect('/posts');
  });
}); // create 생성
app.get('/posts/:id',function(req,res){
  Post.findById(req.params.id, function(err,post){
    if(err) return res.json({success:false, message:err});
    res.render("posts/show",{data:post});
  });
}); // show id로 조회
app.get('/posts/:id/edit',function(req,res){
  Post.findById(req.params.id, function(err,post){
    if(err) return res.json({success:false, message:err});
    res.render("posts/edit",{data:post});
  });
}); // edit
app.put('/posts/:id',function(req,res){
  req.body.post.updatedAt=Date.now();
  Post.findByIdAndUpdate(req.params.id, req.body.post, function(err,post){
    if(err) return res.json({success:false, message:err});
    res.redirect('/posts/'+req.params.id);
  });
}); // update id로 조회 후 수정
app.delete('/posts/:id',function(req,res){
  Post.findByIdAndRemove(req.params.id, function(err,post){
    if(err) return res.json({success:false, message:err});
    res.redirect('/posts');
  });
}); // delete id로 조회 후 삭제

// start 서버
app.listen(3000,function(){
  console.log('Sever On!');
});
