function allCombination(n){
   return allCombinationHelper(n, "");
}
function allCombinationHelper(i, curComb){
  if(i ==0) return curComb+"\n";
  return allCombinationHelper(i-1, curComb+"1 ") + allCombinationHelper(i-1, curComb+"0 ");
}