'use strict';

var exp = function(base, n){
  if (n === 0){
    return 1;
  }
  else {
    return base * exp(base, n - 1)
  }
}
console.log(exp(2, 3))

var exp2 = function(b, n){
  if(n === 0){
    return 1;
  }
  else if (n===1){
    return b;
  }
  else if (n % 2 === 0){
    return exp2(b, Math.floor(n/2)) *  exp2(b, Math.floor(n/2))
  } else{
    return b*(exp2(b, Math.floor((n-1)/2)) * exp2(b, Math.floor((n-1)/2)))
  }
}

console.log(exp2(2,5))