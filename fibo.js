var fibo = function(n){
  if (n === 1){
    return [1];
  } else if (n === 2){
    return [1, 1];
  } else{
    var tmp = fibo(n-1);
    tmp.push(tmp[tmp.length-1] + tmp[tmp.length-2]);
    return tmp;
  }
}
console.log(fibo(3));
console.log(fibo(5));