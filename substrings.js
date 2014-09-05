'use strict';

var substrings = function(string) {
  var len = string.length;
  var substrings = [];
  for (var i = 0; i < len; i++) {
    for (var j = i + 1; j <= len; j++) {
      // console.log(i);
      // console.log(j);
      substrings.push(string.slice(i, j));
    }
  }
  return substrings;
}

console.log(substrings("abc"));