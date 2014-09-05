var myTranspose = function(matrix){

  var ans = new Array(matrix[0].length);  
  for (var i = 0; i < matrix[0].length; i++) ans[i] = new Array(matrix.length);
  
  for (var i = 0; i < matrix[0].length; i++){
    for (var j=0; j < matrix.length; j++){
      ans[j][i] = matrix[i][j];
    }
  }

  return ans;
}

console.log(myTranspose(
  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]));