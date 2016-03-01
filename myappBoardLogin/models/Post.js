var mongoose = require('mongoose');

// 모델 설정
var postSchema = mongoose.Schema({
  title: {type:String, required:true},       // 제목
  body: {type:String, required:true},        // 본문
  author: {type:mongoose.Schema.Types.ObjectId, ref:'user', required:true},
  createdAt: {type:Date, default:Date.now},  // 생성시간
  updatedAt: Date                            // 수정시간
});

var Post = mongoose.model('post',postSchema);

module.exports = Post;
