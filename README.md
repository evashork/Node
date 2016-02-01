# Node
Node.js 개인 연습장 입니다.

## 참고링크
* [Node.js 강좌](http://m.blog.naver.com/azure0777/220461355508)
* [Node.js 설치](http://m.blog.naver.com/azure0777/220464281360)
* [Node.js](https://nodejs.org/en/)
* [node-js-배포-및-운영시-참고사항](http://avilos.codes/server/nodejs/node-js-%EB%B0%B0%ED%8F%AC-%EB%B0%8F-%EC%9A%B4%EC%98%81%EC%8B%9C-%EC%B0%B8%EA%B3%A0%EC%82%AC%ED%95%AD/)

---

## Express
Node 개발프레임워크 

#### Express 설치
```
npm install express --save
```
---

## Nodemon
node 데몬 - 소스를 수정함과 동시에 리스타트를 해준다.

#### nodemon 설치
```
$ npm install nodemon -g	
```

#### nodemon 실행
```
$ nodemon
```

#### nodemon 끄기
```
Ctrl + C
```

---

## Node 코드

#### 버전 확인
```
node -v
npm -v
```

#### npm init
node 설치하는 명령어, package.json을 생성한다
```
npm init
```

#### 노드 기본 설정
```
var express = require('express');
var path = require('path');
var app = express();

// 경로를 설정해준다 ex) /css 
app.use(express.static(path.join(__dirname,'public')));
console.log(__dirname);

app.listen(3000,function(){
  console.log('Sever On!');
});

```

