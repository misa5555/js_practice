'use strict';

var bars = [[3,2,1],[],[]];

var isValidMove = function(from, to) {
  if (bars[from].length === 0) return false;
  if (bars[to].length === 0) return true;
  return (bars[to][bars[to].length-1] > bars[from][bars[from].length-1]);
}

var move = function(from, to) {
  if (isValidMove(from, to)) {
    bars[to].push(bars[from].pop());
  }
}


var isWon = function() {
  return (bars[0].length === 0 && (bars[1].length === 3 
    || bars[2].length === 3));
}

//console.log(isValidMove(2,0));
move(0, 2);
move(0, 1);
move(2, 1);
move(0, 2);
move(1, 0);
move(1, 2);
move(0, 2);
// move()
console.log(bars);
console.log(isWon());