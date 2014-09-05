var stocks = [100, 105, 107, 103, 115, 113];
var max = 0;
var ans = [];
for (var i = 0; i< stocks.length-1; i++){
  for (var j = i+1; j < stocks.length; j++){
    if ((stocks[j] - stocks[i]) > max){
      max = stocks[j] - stocks[i];
      ans = [i, j];
    }
  }
}
 console.log(ans);