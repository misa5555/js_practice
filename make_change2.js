var coins = [25, 10, 5, 1];

var makeChange = function(change) {  
  
  var makeChange = function(change, changeSet) {
    var changeSets = [];
    coins.forEach(function(coin) {
      if (coin < change) {
        changeSets.push([makeChange(change - coin, changeSet.concat(coin))]);
      }
    });
    console.log(changeSets);
    
    var min = 100;
    var mini = 0;
    if (changeSets.length > 0) {
      for (var i = 0; i < changeSets.length; i++) {
        if (changeSets[i].length < min) {
          mini = i;
        }
      }
    }
    // console.log(changeSets[]);
    return changeSets[mini];
  };

  var changeSet = [];
  return makeChange(change, changeSet);
};

console.log(makeChange(14));