// coins sorted
var makeChange = function(n, coins){
  var best_coin_set = [];
  
  if (coins[coins.length - 1] > n){
    return [];
  }
  if(n === 0){
    return [];
  }
  
  for(var i = 0; i< coins.length; i++){
    var remainder = n - coins[i];
    console.log(remainder);
    if (remainder < 0){
      continue;
    }
    var coins_left = coins.slice(i, coins.length);
  
    var change_set = makeChange(remainder, coins_left);
   
    // if (change_set === null || change_set === undefined){
 //      continue;
 //    }
    change_set.push(coins[i]);
   
    if (( best_coin_set.length === 0 ) || 
    (best_coin_set.length > change_set.length)){
      best_coin_set = change_set;
    }
    
  }
  
  return best_coin_set;
  
}

var coins = [25, 10, 5, 1];
console.log(makeChange(14, coins));