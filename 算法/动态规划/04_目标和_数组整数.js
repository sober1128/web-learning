// 494 给你一个整数数组 nums 和一个整数 target 。
// 向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式；
// 返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目

// 递归  回溯？
var findTargetSumWays = function(nums, target) {
  let count = 0;
  const dfs = (nums, target, index, sum) => {
    if(index == nums.length) {
      if(sum == target) {
        count++;
      }
    } else {
      dfs(nums, target, index+1, sum+nums[index]);
      dfs(nums, target, index+1, sum-nums[index]);
    }
  }
  dfs(nums, target, 0, 0);
  return count;
};

//  动态规划
var findTargetSumWays = function(nums, target) {
  let sum = 0;
  for(let num of nums) {
    sum += num;
  }
  const diff = sum - target;
  if(diff < 0 || diff % 2 != 0) return 0;   // 不满足非负偶数的条件，直接返回0
  const n = nums.length, neg = diff / 2;
  const dp = new Array(n+1).fill(0).map(() => new Array(neg+1).fill(0));
  dp[0][0] = 1, dp[0][1] = 0;
  for(let i = 1; i <= n; i++) {
    let num = nums[i-1];
    for(let j = 0; j <= neg; j++) {
      dp[i][j] = dp[i][j-1];     
      // 如果 j<num，则不能选 num，此时有 dp[i][j] = dp[i - 1][j]
      // 如果 j≥num，则如果不选num，方案数是 dp[i−1][j]
      if(j >= num) {
        dp[i][j] += dp[i-1][j-num];
        // j≥num 如果选num，方案数是dp[i−1][j−num]，此时有 dp[i][j]=dp[i−1][j]+dp[i−1][j−num]
      }
    }
  }
  return dp[n][neg];   //  空间复杂度为 O(n × neg) 
}


// dp 的每一行的计算只和上一行有关，因此可以使用滚动数组的方式，去掉 dp 的第一个维度，将空间复杂度优化到 O(neg)。
// 实现时，内层循环需采用倒序遍历的方式，这种方式保证转移来的是 dp[i−1][] 中的元素值。
var findTargetSumWays = function(nums, target) {
  let sum = 0;
  for (const num of nums) {
      sum += num;
  }
  const diff = sum - target;
  if (diff < 0 || diff % 2 !== 0) {
      return 0;
  }
  const neg = diff / 2;
  const dp = new Array(neg+1).fill(0);
  dp[0] = 1;
  for(const num of nums) {
    for(let j = neg; j >= num; j--) {
      dp[j] += dp[j-num];
    }
  }
  return dp[neg];
} 