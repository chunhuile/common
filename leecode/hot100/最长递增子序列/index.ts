function lengthOfLISv2(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    // 初始化 dp 数组，所有值为 1
    const dp: number[] = new Array(nums.length).fill(1);

    // 遍历数组，更新 dp 数组
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    // 返回 dp 数组中的最大值
    return Math.max(...dp);
}