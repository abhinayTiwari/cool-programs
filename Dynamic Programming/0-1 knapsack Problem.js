var weight = [2,2,3], value = [6,10,12];
var maxweight = 5;
var map = new Map();
function knapsack(maxweight){
    if(maxweight <=0) return 0;
    var maxVal = Number.MIN_VALUE;
  console.log("-------------------------");
   console.log("knapsack("+ maxweight+")");
  // if(map.has(maxweight)){
    // console.log("memoization produced me");
   //   return   map.get(maxweight);
  // }
   for(var i=0; i< weight.length; i++){
	   if(maxweight - weight[i] >= 0){
	   	  let curVal =  value[i] + knapsack(maxweight-weight[i]);
         console.log("curVal = "+ curVal);
	     maxVal = Math.max(maxVal,curVal);
         console.log("maxVal = "+ maxVal);
	   }else{
	       console.log("negative weight");
	   }

   }
    map.set(maxweight, maxVal);
   return maxVal;
}