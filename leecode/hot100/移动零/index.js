/**
 *  给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *  请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 */ 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 这个方法使用了filter
var moveZeroes = function(nums) {
    if(nums && nums.length == 0 ){
        return []
    }

    const list = nums.filter((i)=> i == 0);
    const list1 = nums.filter((j)=>j != 0);

   return  list1.concat(list)

};


/**
 * @param 提示：使用双向指针 ，遍历数组，遇0则push到数尾，并将该元素截取splce
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums && nums.length == 0 ){
        return []
    }

    let zeroLength = 0;
    for (let i = 0 ; i < nums.length - zeroLength;i++){
        if(nums[i] === 0){
            nums.push(0);
            nums.splice(i,1)
            i--
            zeroLength ++
        }
    }

};