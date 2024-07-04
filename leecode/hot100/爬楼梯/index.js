/**
 * @param {number} n
 * @return {number}
 * @description 解法1 回溯 缺点：当n=44时，会超时
 */
 
/* 爬楼梯：回溯 */
var climbStairs = function (n) {
    const choices = [1, 2]; // 可选择向上爬 1 阶或 2 阶
    const state = 0; // 从第 0 阶开始爬
    const res = new Map();
    res.set(0, 0); // 使用 res[0] 记录方案数量
    backtrack(choices, state, n, res);
    return res.get(0);
}


/* 回溯 */
function backtrack(choices, state, n, res) {
    // 当爬到第 n 阶时，方案数量加 1
    if (state === n) res.set(0, res.get(0) + 1);
    // 遍历所有选择
    for (const choice of choices) {
        // 剪枝：不允许越过第 n 阶
        if (state + choice > n) continue;
        // 尝试：做出选择，更新状态
        backtrack(choices, state + choice, n, res);
        // 回退
    }
}


/**
 * @description 递归 js 解法
 * */ 

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return dfs(n);
};
   
   /* 搜索 */
function dfs(i) {
       // 已知 dp[1] 和 dp[2] ，返回之
       if (i === 1 || i === 2) return i;
       // dp[i] = dp[i-1] + dp[i-2]
       const count = dfs(i - 1) + dfs(i - 2);
       return count;
}
//  ts解法

/* 搜索 */
// function dfs(i: number): number {
//     // 已知 dp[1] 和 dp[2] ，返回之
//     if (i === 1 || i === 2) return i;
//     // dp[i] = dp[i-1] + dp[i-2]
//     const count = dfs(i - 1) + dfs(i - 2);
//     return count;
// }

// /* 爬楼梯：搜索 */
// function climbingStairsDFS(n: number): number {
//     return dfs(n);
// }

// 记忆化

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // mem[i] 记录爬到第 i 阶的方案总数，-1 代表无记录
     const mem = new Array(n + 1).fill(-1);
     return dfs(n, mem);
 };
 
 /* 记忆化搜索 */
 function dfs(i, mem) {
     // 已知 dp[1] 和 dp[2] ，返回之
     if (i === 1 || i === 2) return i;
     // 若存在记录 dp[i] ，则直接返回之
     if (mem[i] != -1) return mem[i];
     // dp[i] = dp[i-1] + dp[i-2]
     const count = dfs(i - 1, mem) + dfs(i - 2, mem);
     // 记录 dp[i]
     mem[i] = count;
     return count;
 }

//  动态规划
/* 爬楼梯：动态规划 */
function climbingStairsDP(n) {
    if (n === 1 || n === 2) return n;
    // 初始化 dp 表，用于存储子问题的解
    const dp = new Array(n + 1).fill(-1);
    // 初始状态：预设最小子问题的解
    dp[1] = 1;
    dp[2] = 2;
    // 状态转移：从较小子问题逐步求解较大子问题
    for (let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
}
