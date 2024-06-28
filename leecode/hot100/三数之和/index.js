/**
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
 * 你返回所有和为 0 且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 */ 

/**
 * 解题思路：使用双指针
 * 注意：
 *      1、数组排序
 *      2、双指针（头指针和尾指针）
 */ 

var threeSum = function (nums) {
    var arr = [] // 结果数组
    nums.sort((a, b) => a - b) // 数组从小到大排序
    for (let i = 0; i < nums.length; i++) {
        // 头指针大于0直接结束循环，因为从大到小排列数组，头指针大于0的话 左右指针也大于0，相加不可能为0
        if (nums[i] > 0) break;
        // 去重 头指针与前一位相同则跳过
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        // 定义左右指针 ，左指针为头指针下一位，右指针从数组尾部倒序
        var left = i + 1, right = nums.length - 1
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]
            if (sum == 0) {
                arr.push([nums[i], nums[left], nums[right]])
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            }
            else if (sum < 0) left++;
            else if (sum > 0) right--;
        }
    }
    return arr;
};
