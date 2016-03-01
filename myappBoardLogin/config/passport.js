var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;   // LocalStrategy 패키지로 부터 가져온다.
var User = require('../models/User');
// 파일위치가 명시 되지않으면 node_modules에 해당 폴더가 있는 것으로 간주 한다.

passport.serializeUser(function(user,done){  // 세션으로 부터 개체를 가져온다.
  done(null, user.id);
});
passport.deserializeUser(function(id,done){
  User.findById(id,function(err,user){
    done(err,user);
  });
});


passport.use('local-login',      // Strategy의 이름을 지어준다. local-login
  new LocalStrategy({            // Strategy 설정
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  },
  function(req, email, password, done){
    User.findOne({'email' : email }, function(err, user){
      if(err) return done(err);

      if(!user){
        req.flash("email", req.body.email);
        return done(null, false, req.flash('loginError','No user found.'));
      }
      if(!user.authenticate(password)){
        req.flash("email", req.body.email);
        return done(null, false, req.flash('loginError','Password does not Match.'));
      }
      return done(null, user);
    });
  }
)
);

module.exports = passport;    // module.exports에 대입한 object는 require시에 대입된다.
