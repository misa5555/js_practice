'use strict';

var range = function(start, end) {
  if (start > end) return [];
  return [start].concat(range(start + 1, end));
};

console.log(range(1,10));