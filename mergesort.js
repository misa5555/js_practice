var merge = function(ary1, ary2){
  var merged_ary = [];
  var remained_ary = [];
  
  var ptr1 = 0;
  var ptr2 = 0;
  
  while(true){
    if(ptr1 >= ary1.length || ptr2 >= ary2.length){
      break;
    }
    
    if( (ary1[ptr1] > ary2[ptr2])){
      merged_ary.push(ary2[ptr2]);
      ptr2++;
    } else{
      merged_ary.push(ary1[ptr1]);
      ptr1++;
    }
  }
  
  if (ptr1 >= ary1.length){
    remained_ary = ary2.slice(ptr2);
  }
  else if (ptr2 >= ary2.length) {
    remained_ary = ary1.slice(ptr1);
  }
   
  return merged_ary.concat(remained_ary);
}


var merge_sort = function(ary){
  if (ary.length === 1){
    return ary;
  }
  var mid = Math.floor(ary.length / 2);
  
  var left = ary.slice(0, mid);
  var right = ary.slice(mid);
  
  var left_sorted = merge_sort(left);
  var right_sorted = merge_sort(right);
  
  return merge(left_sorted, right_sorted);
   
}

console.log(merge_sort([1,3,4], [2,6,7]))
