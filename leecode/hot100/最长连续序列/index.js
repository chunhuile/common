/**
 * @file 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
 * 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
 * 
 * 示例：
 *  输入：nums = [100,4,200,1,3,2]
 * 输出：4
 * 解释：最长数字连续序列是 [1, 2, 3, 4]。它的长度为 4。
 */ 

/**
 * @description: 哈希表+动态规划  TC:O(n)  SC:O(n)
 * @param {*} nums  给定未排序数组
 * @return {*}
 */
function hashMapAndDP(nums){
    /**
     * 该方案使用哈希表+动态规划，对于数组中某个元素
     * num，它的最长序列应该为其左邻居num-1的最长序
     * 列与右邻居num+1的最长序列的和+1即:
     * 
     * MaxLen(num)=MaxLen(num-1)+1+MaxLen(num+1)
     * 
     * 我们可以通过哈希表将某元素的最长序列存储起来，
     * key为num，value为当前元素的最长序列
     * 
     * 我们通过遍历数组，在哈希表中查询是否存在该元素的
     * 左右邻居以获取其邻居的最长序列，如果没有则置为0，
     * 然后通过上述公式计算结果并将结果保存至哈希表中。
     * 
     * 我们如何更新哈希表中序列的其他值？其实我们只需要更
     * 新当前元素最长序列的首个元素与最后一个元素的值即可，
     * 比如以下示例：
     * 
     * [1,2,3,4,5] 我们计算出元素3的最长序列为5，我们无需去
     * 更新2和4元素的值，因为他们各自左右元素都已出现，后续
     * 元素不会再依赖其来计算，因此我们仅需要更新1和5元素的
     * 值即可
     * 
     * 上述公式计算某个元素的最
     * 长序列，并用哈希表存起来，
     * 
     */
    let map=new Map(),maxCount=0;
    for(let i=0;i<nums.length;i++){
        // 避免重复计算相同的元素
        if(!map.get(nums[i])){
            preLen=map.get(nums[i]-1)||0;
            lastLen=map.get(nums[i]+1)||0;
            curLen=preLen+1+lastLen;
            maxCount=Math.max(maxCount,curLen);
            map.set(nums[i],curLen);
            map.set(nums[i]-preLen,curLen);
            map.set(nums[i]+lastLen,curLen);
        }
    }
    return maxCount;
}

