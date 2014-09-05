var bsearch = function(ary, target){
    
  var bsearch = function(ary, target, imin , imax) {
    var mid = Math.floor( ary.length / 2 );
    var before = ary.slice(0, mid);
    var after = ary.slice(mid);

    if (target === ary[mid]) {
      return mid + imin;
    } else if (target < ary[mid]) {
      return bsearch(before, target, imin, mid);
    } else if (target > ary[mid]) {
      return bsearch(after, target, imin + mid, imax);
    } else {
      return null;
    }
  }
  return bsearch(ary, target, 0, ary.length-1);
}

console.log(bsearch([1,2,3,4,5,6,7], parseInt(process.argv[2])));