var twoSum = function(ary){
  var ans = [];
  for(var i = 0; i < ary.length-1; i++){
    for(var j = i+1; j < ary.length; j++){
      if (ary[i] + ary[j] === 0){
        ans.push([i, j]);
      }      
    }
  }
  return ans;
}

console.log(twoSum([-1, 0, 2, -2, 1]));