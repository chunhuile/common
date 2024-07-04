function robv1(nums) {

    if(!nums.length) return 0;
    if(nums.length == 1) return nums[0];

    let arr = new Array(nums.length).fill(0);

    arr[0] = nums[0];
    arr[1] = Math.max(nums[0],nums[1]);

    for(let i = 2;i <nums.length;i++){
        arr[i] = Math.max(arr[i-1],nums[i]+arr[i-2])
    }
    
    return arr[nums.length-1]

};