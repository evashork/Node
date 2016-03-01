var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/Post');

// Get 신호로 /posts 에 접속하는 경우 게시글(Post)데이터의 모든 데이터를 찾고 Post.find({}
// 빈 객체를 전달하는 경우 에러가 있다면 에러를, 에러가 없다면 모든 게시글(posts)를 response 한다.
// find 로 찾고 sort 로 정령하고 exec로 함수를 수정한다. -createdAt 역방향 정렬이다.
router.get('/', function(req,res){
  Post.find({}).populate("author").sort('-createdAt').exec(function(err,posts){
    if(err) return res.json({success:false, message:err});
    res.render("posts/index",{posts:posts, user:req.user});
  });
}); // index
router.get('/new', isLoggedIn, function(req,res){
  res.render("posts/new", {user:req.user});
}); // new
// Post 신호로 /posts 에 접속하는 경우 요청신호의 body의 post 항목(req.body.post)로 데이터를 생성(Post.create())
// 에러가 있으면 에러를, 에러가 없다면 새 게시글(post)를 response 한다.
router.post('/', isLoggedIn, function(req,res){
  req.body.post.author=req.user._id;
  Post.create(req.body.post,function(err,post){
    if(err) return res.json({success:false, message:err});
    res.redirect('/posts');
  });
}); // create 생성
router.get('/:id',function(req,res){
  Post.findById(req.params.id).populate("author").exec(function(err,post){
    if(err) return res.json({success:false, message:err});
    res.render("posts/show",{post:post, user:req.user});
  });
}); // show id로 조회
router.get('/:id/edit', isLoggedIn, function(req,res){
  Post.findById(req.params.id, function(err,post){
    if(err) return res.json({success:false, message:err});
    if(!req.user._id.equals(post.author)) return res.json({success:false, message:"Unauthrized Attempt"});
    res.render("posts/edit",{post:post, user:req.user});
  });
}); // edit
router.put('/:id', isLoggedIn, function(req,res){
  req.body.post.updatedAt=Date.now();
    Post.findByIdAndUpdate({_id:req.params.id, author:req.user._id}, req.body.post, function(err,post){
      if(err) return res.json({success:false, message:err});
      if(!post) return res.json({success:false, message:"No data found to update"});
      res.redirect('/posts/'+req.params.id);
    });
}); // update id로 조회 후 수정
router.delete('/:id',function(req,res){
    Post.findByIdAndRemove({_id:req.params.id, author:req.user._id}, function(err,post){
      if(err) return res.json({success:false, message:err});
      if(!post) return res.json({success:false, message:"No data found to delete"});
      res.redirect('/posts');
    });
}); // delete id로 조회 후 삭제

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()){        // req.isAuthenticated() 로그인 상태인지 체크 한다.
    return next();
  }
  res.redirect('/');
}

module.exports = router;
