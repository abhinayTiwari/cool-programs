// O(1) solution using Binet's formula
function fib(n){
     var sqrt5 = Math.sqrt(5);
     var onePlusSqrt5 = 1+ sqrt5;
     var oneMinusSqrt5 = 1 - sqrt5;
     var firstBracket = Math.pow((onePlusSqrt5/2) , n);
     var secondBracket = Math.pow((oneMinusSqrt5/2) , n);
    return Math.ceil((1/sqrt5)*(firstBracket - secondBracket));
}

// iterative solution in O(n)
function fibI(n){
   var n1 =0, n2 = 1, n3=0;
   for(var i=2; i<=n; i++){
     n3 = n1+n2;
     n1 = n2;
     n2 = n3;
   }
   return n3
}


// largest Fib number in Javascript

// enter any starting number as n;
function largestFibNumber(n){
	var fibValue =  fibI(n);
   if(fibValue != "Infinity" && fibI(n+1) == "Infinity" )
	   return n;
   else if(fibValue != "Infinity")
        return largestFibNumber(n+1);
   return largestFibNumber(n-1);
}