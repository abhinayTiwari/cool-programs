coins = [10, 5, 2, 1];
function change(n){
   console.log("-------------------------------");
   console.log("inside change(" + n+")  function");
   if(n ==0) return 0;
   var minCoins = Number.MAX_VALUE;
   
   for(var i=0; i< coins.length; i++){
       let diff = n - coins[i];
      if(diff >= 0){
         minCoins =  Math.min(minCoins, change(diff));
       }
      
   }
       minCoins = 1+ minCoins;
   console.log("returning minCoins : " + minCoins+" ");
   return minCoins;
}



// using dynamic programmic 
var map = new Map();
function change(n){
   console.log("-------------------------------");
   console.log("inside change(" + n+")  function");
   if(n ==0) return 0;
   if(map.has(n)){
	   return map.get(n);
   } 
   var minCoins = Number.MAX_VALUE;
   
   for(var i=0; i< coins.length; i++){
       let diff = n - coins[i];
      if(diff >= 0){
         minCoins =  Math.min(minCoins, change(diff));
       }
      
   }
       minCoins = 1+ minCoins;
  map.set(n,minCoins )
   console.log("returning minCoins : " + minCoins+" ");
   return minCoins;
}
