/* 给你一个由 不同 整数组成的数组 nums ，和一个目标整数 target 。请你从 nums 中找出并返回总和为 target 的元素组合的个数。

题目数据保证答案符合 32 位整数范围。

输入：nums = [1,2,3], target = 4
输出：7
解释：
所有可能的组合为：
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
请注意，顺序不同的序列被视作不同的组合。
链接：https://leetcode-cn.com/problems/combination-sum-iv

dp[i]=dp[i-nums[0]]+dp[i-nums[1]]+dp[i-nums[2]]+...
举个例子比如nums=[1,3,4],target=7;
dp[7]=dp[6]+dp[4]+dp[3]
其实就是说7的组合数可以由三部分组成，1和dp[6]，3和dp[4],4和dp[3];
let dp = new Array(target+1)
是为了算上自己的情况，比如dp[1]可以由dp【0】和1这个数的这种情况组成。

*/

var combinationSum4 = function(nums, target) {

  let dp = new Array(target+1).fill(0)
  dp[0] = 1
  for(let i = 1; i <= target; i++) {
    for(let num of nums) {
      if(i >= num) {
        dp[i] = dp[i] + dp[i-num]
      }
    }
  }

  return dp[target]
}

// 回溯---超出时间限制
var combinationSum4 = function(nums, target) {
  let count = 0;
  const dfs = (index, sum) => {
    if(sum >= target) {
      if(sum == target) {
        count++;
      }
      return;
    }

    for(let i = 0; i < nums.length; i++) {
      sum += nums[i];
      dfs(i, sum);
      sum -= nums[i];
    }
  }
  dfs(0, 0);
  return count;
};

var combinationSum4 = function(nums, target) {
  let dp = new Array(target+1).fill(0);
  dp[0] = 1;    // nums 的数都是正整数,故初始化条件 f[0] = 1（代表什么都不选，凑成总和为 0 的方案数为 1）
  for(let i = 1; i <= target; i++) {
    for(j = 0; j < nums.length; j++) {
      if(i >= nums[j]) {
        // 定义 dp[i] 为凑成总和为 i 的方案数是多少。
        dp[i] = dp[i] + dp[i - nums[j]];
      }
    }
  }
  return dp[target];
}

