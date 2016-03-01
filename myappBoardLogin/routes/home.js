var express = require('express');
var router = express.Router();       // router를 module로 export하기 위해 express.Router() 개체를 생성함
var mongoose = require('mongoose');
var passport = require('../config/passport.js');

// set routes  router 미들웨어 - 페이지 라우팅 클라이언트 요청에 적절한 페이지를 제공한다.
router.get('/',function(req,res){
  res.redirect('/posts');
});
router.get('/login',function(req,res){
  res.render('login/login',{email:req.flash("email")[0], loginError:req.flash('loginError')});
});
router.post('/login',
  function(req,res,next){
    req.flash("email");
    if(req.body.email.length === 0 || req.body.password.length === 0){
      req.flash("email", req.body.email);
      req.flash("loginError","Please enter both email and password");
      res.redirect('/login');
    } else {
      next();
    }
  }, passport.authenticate('local-login',{
    successRedirect : '/posts',
    failureRedirect : '/login',
    failuerFlash : true
  })
);
router.get('/logout', function(res,req){
  req.logout();
  res.redirect('/');
});

module.exports = router;
