/*
	underscore 모듈을 사용하는 경우
	underscore는 배열을 쉽게 사용할 수 있는 모듈이다.
*/

var _ = require('underscore');  // 변수를 선언한다. underscore는 변수 이름을 _ 로 표시한다.

var arr = [3,6,9,12];

console.log(arr[0]);			//  첫번째 배열 값 가져오기
console.log(_.first(arr));		//  underscore를 이용하여 첫번째 배열 값 가져오기
console.log(arr[arr.length-1]);		//  마지막 배열 값 가져오기
console.log(_.last(arr));		//  underscore를 이용하여 마지막 배열 값 가져오기
