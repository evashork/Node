# Node
Node.js 개인 연습장 입니다.

## 참고링크
* [Node.js 강좌](http://m.blog.naver.com/azure0777/220461355508)
* [Node.js 설치](http://m.blog.naver.com/azure0777/220464281360)
* [Node.js](https://nodejs.org/en/)
* [Node.js API](https://nodejs.org/dist/latest-v6.x/docs/api/)
* [NPM](https://npmjs.com)
* [node-js-배포-및-운영시-참고사항](http://avilos.codes/server/nodejs/node-js-%EB%B0%B0%ED%8F%AC-%EB%B0%8F-%EC%9A%B4%EC%98%81%EC%8B%9C-%EC%B0%B8%EA%B3%A0%EC%82%AC%ED%95%AD/)
* [RESTful](http://blog.naver.com/azure0777/220508108759)
* [static 정적폴더 설정](http://m.blog.naver.com/azure0777/220469049820)
* [dynamic 동적폴더 설정](http://m.blog.naver.com/azure0777/220475344428)
* [몽고DB 가입 및 설치](http://blog.naver.com/azure0777/220482056110)
* [몽고DB와 몽구스사용법, 모델과 스키마](http://blog.naver.com/azure0777/220482056110)
* [몽고DB API_ find](http://mongoosejs.com/docs/api.html#model_Model.find)

## 유용한 npm 모음
* [uglify-js](https://www.npmjs.com/package/uglify-js) - 소스코드 난독화
* [express](https://www.npmjs.com/package/express) - 
* [nodemon](https://www.npmjs.com/package/nodemon) - node 서버
* [underscore](http://underscorejs.org/) - 배열을 쉽게 사용가능

---


## Node 코드

#### node 실행
```
node
```

#### test.js 실행
```
node test
```

#### 버전 확인
```
node -v
npm -v
```

## npm
npm은 node 모듈을 쉽게 설치하게 도와주는 프로그램이다.
#### npm init
node 설치하는 명령어, package.json을 생성한다
```
npm init
```
#### -g
npm 설치시 -g 를 붙이면 어디서든 글로벌하게 해당 모듈을 사용하고 불러올 수 있다. -g가 없을 경우는 프로젝트에만 설치 된다.
```
npm install underscore -g
```
#### --save
dependencies 의존성을 package.json에 추가 한다. 프로젝트에 필요한 모듈의 경우엔 --save 붙이는 게 좋다. 일시적으로 사용하는 모듈은  --save를 붙이지 않는다.
```
npm install underscore --save
```


