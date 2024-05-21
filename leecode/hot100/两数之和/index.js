/**
 * @file 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。
 */ 

/**
 * 测试用例
 * 输入：nums = [2,7,11,15], target = 9
 * 输出： [0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */ 

/**
 * 暴力解决
 * 使用双层嵌套。
 * 注意：第一次使用单层循环，当第一二个数据不满足条件时，单层循环报错
 */ 


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var a = 0; a <= nums.length;a++){

        for(var b = a+1;b<= nums.length;b++){
            if(nums[a] == target - nums[b]) {
             return [a,b]
        } 
        }
    }

};