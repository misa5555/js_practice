var uniq = function( ary ){
  var ans = []
  for(var i = 0; i < ary.length-1; i++){
    if( ans.indexOf(ary[i])=== -1){
      ans.push(ary[i]);
    }
  }
  return ans; 
}
console.log(uniq([1,4,6,7,2,1]));