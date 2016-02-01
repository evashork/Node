var express = require('express');
var path = require('path');
var app = express();

// 경로를 설정해준다 ex) /css
app.use(express.static(path.join(__dirname,'public')));
console.log(__dirname);

app.listen(3000,function(){
  console.log('Sever On!');
});
