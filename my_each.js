// 'use strict'
// var doubleArray = function(ary){
//   tmp = new Array(ary.length)
//   for ( var i = 0; i < ary.length; i++){
//     tmp[i] = ary[i] * 2;
//   }
//   return tmp;
// }
// console.log(doubleArray([1,2,3]));
//
var myEach = function( ary, func ){
  for ( var i = 0; i < ary.length; i++){
    // tmp[i] = func(ary[i]);
    func(ary[i])
  }
  return ary;
}

// // var doubleFunc = function(i){ return i*2 }
// console.log(myEach([1,2,3], function(i){ console.log(i*2); }));
// // console.log(myEach([1,2,3], doubleFunc));
//
// var myMap = function(ary, func) {
//   var tmp = [];
//   myEach(ary, function(i){
//     tmp.push(func(i));
//   })
//   return tmp;
// }

var myInject = function(ary, func) {
  var ans = 0;
  myEach(ary, function(i){
    ans = func(ans, i);
  });
  return ans;
}
var sum_up = function(sum, n){
  return sum + n
}
console.log(myInject([1,2,3], sum_up));