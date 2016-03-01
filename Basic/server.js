var http = require('http');   // http 모듈 임포트
function onRequest(request, response){
  console.log("사용자가 요청 합니다." + request.url);
  // response 객체
  response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});   // 응답 해더 작성
  response.end('<h1>한글화 발사</h1>'); // 응답 본문 작성
}

http.createServer(onRequest).listen(8888);
console.log("Server On");
