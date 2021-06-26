var maxSubArray = function(nums) {
  let len = nums.length
  let dp = new Array(len)
  dp[0] = nums[0]
  let res = nums[0]
  for(let i = 1; i < len; i++) {
    // dp[i] = dp[i-1] <= 0 ? nums[i] : dp[i-1] + nums[i]   // 动态规划
    dp[i] = Math.max(dp[i-1], 0) + nums[i];
    res = Math.max(res, dp[i]);
  }
  return res
};

var maxSubArray = function(nums) {
  let len = nums.length
  let res = nums[0]
  for(let i = 1; i < len; i++) {
    // 直接在原数组上进行修改，不占用额外空间存储数据
    nums[i] += Math.max(nums[i-1], 0)
    res = Math.max(res, nums[i]);
  }
  return res
};