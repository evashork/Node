// http://underscorejs.org/
var _ = require('underscore'); // 일반적으로 underscore는 _로 지정한다.
var arr = [3,6,9,1,12];

console.log(arr[0]);
console.log(_.first(arr));

console.log(arr[arr.length-1]);
console.log(_.last(arr));
