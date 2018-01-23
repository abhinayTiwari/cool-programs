function targetSum(nums, t, i, sum){
   if(i == nums.length){
      return sum == t? 1:0;
    }
   
   return targetSum(nums, t, i+1, sum+nums[i]) + targetSum(nums, t, i+1, sum-nums[i]);
       

}