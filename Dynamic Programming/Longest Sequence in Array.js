a1 = [1,2,3,4,56,7,8,9,12,34,56,78,9,0]
a2 = [34,56,78,9,0, 1,2,3,4,56,7,8,9,12,34,56]
function findLongestSequence(a1,a2){
   var mapping = [], ans = 0;
   for(var i=0; i<a1.length; i++){
      let row = []; 
      for(var j=0; j< a2.length; j++){
          if(a1[i] == a2[j]){
             if(i>0 && j >0){
                row.push(mapping[i-1][j-1] + 1);
             }else{
                row.push(1);
             }
             
            
             ans = Math.max(ans,row[j]);
          }else{
             row.push(0);
           } 
       }
    console.log(row);
     mapping.push(row);
   }
    
   return ans;
}