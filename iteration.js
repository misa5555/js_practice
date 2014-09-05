
var bubbleSort = function( ary ){
  for (var j = 0; j < ary.length; j++){
    for ( var i = 0; i < ary.length -1 ; i++){
      if (ary[i] > ary[i + 1]){
        var tmp = ary[i];
        ary[i] = ary[i+1];
        ary[i+1] = tmp;
      }
    }
  }
  return ary;
}

console.log(bubbleSort([4,3,1,6,5]));