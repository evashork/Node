# Node
Node.js 개인 연습장 입니다.

## 참고링크
* [Node.js 강좌](http://m.blog.naver.com/azure0777/220461355508)
* [Node.js 설치](http://m.blog.naver.com/azure0777/220464281360)
* [Node.js](https://nodejs.org/en/)
* [node-js-배포-및-운영시-참고사항](http://avilos.codes/server/nodejs/node-js-%EB%B0%B0%ED%8F%AC-%EB%B0%8F-%EC%9A%B4%EC%98%81%EC%8B%9C-%EC%B0%B8%EA%B3%A0%EC%82%AC%ED%95%AD/)
* [RESTful](http://blog.naver.com/azure0777/220508108759)
* [static 정적폴더 설정](http://m.blog.naver.com/azure0777/220469049820)
* [dynamic 동적폴더 설정](http://m.blog.naver.com/azure0777/220475344428)
* [몽고DB 가입 및 설치](http://blog.naver.com/azure0777/220482056110)
* [몽고DB와 몽구스사용법, 모델과 스키마](http://blog.naver.com/azure0777/220482056110)
* [몽고DB API_ find](http://mongoosejs.com/docs/api.html#model_Model.find)

---

## Node 명령어

### Node 실행
```
node 
```

### Node 파일 실행
```
node test(파일명) 
```


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

#### static 정적폴더 설정
```
var express = require('express');
var path = require('path');
var app = express();

// 경로를 설정해준다 ex) /css
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000,function(){
  console.log('Sever On!');
});

```

#### dynamic 동적폴더 설정
```
var express = require('express');
var path = require('path');
var app = express();

// 경로를 설정해준다 ex) /css
app.use(express.static(path.join(__dirname,'public')));

app.listen(3000,function(){
  console.log('Sever On!');
});

```

## RESTful
REST는 서버와 클라이언트사이의 데이터교환을 할때 표준 http 프로토콜을 이용하는 것, http 프로토콜은 인터넷을 통해 데이터 교환을 하기 위한 수많은 방법 중의 하나. 다른 방법 중 쉬운 것은 FTP가 있다.

#### 장점
1 전송되는 데이터가 사람이 이해할 수 있는 형식이다. 주로 json이나 xml등으로 이루어 진다.
2 별도의 프로토콜이 필요하지 않다.
3 많이 쓰인다. 웹표준

REST는 기술에 대한 설명이고 RESTful은 그 기술을 사용하는 매너이다. 흔히 RESTful design 이라고도 한다.

#### 미들웨어

#### REST Client 설치 - [Insomnia](https://chrome.google.com/webstore/search/insomnia?utm_source=chrome-ntp-icon)
크롬 확장 프로그램
