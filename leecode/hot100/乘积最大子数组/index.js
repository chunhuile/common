/**
 * @param {number[]} nums
 * @return {number}
 * @desc 使用动态规划解答 但是这里好像没掌握好 所以一直卡壳
 */
var maxProduct = function(nums) {
    if(!nums.length) return 0;
    if(nums.length == 1) return nums[0];

    let dp =nums[0];
    let currentProduct = nums[0];
    let maxProduct = nums[0];
    let temp1 = 0,temp= 0 ;

    for(let i = 1; i<nums.length;i++){
       temp1 = currentProduct * nums[i];
       temp2 = maxProduct * nums[i];

       currentProduct = Math.min(temp1,temp2,nums[i]);
       maxProduct = Math.max(temp1,temp2,nums[i])
        
       dp = Math.max(maxProduct,dp)
     
    }

    return dp

};