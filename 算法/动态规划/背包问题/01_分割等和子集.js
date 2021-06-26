var canPartition = function(nums) {
  let n = nums.length;
  if(n < 2) return false;
  let sum = 0, max = 0;
  for(const num of nums) {
    sum += num;
    max = num > max ? num : max;
  }
  if(sum % 2 != 0) return false;   // 判断sum是否为偶数
  let target = sum / 2;
  if(max > target) return false;
  const dp = new Array(n).fill(0).map(v => new Array(target+1).fill(0));
  dp[0][0] = 1;
  for(let i = 1; i <= n; i++) {
    let num = nums[i];
    for(let j = 0; j <= target; j++) {
      dp[i][j] = dp[i-1][j];
      if(j >= num) {
        dp[i][j] += dp[i-1][j-num];
      }
    }
  }
  return dp[n][target] != 0;
}

var canPartition = function(nums) {
  let sum = 0;
  for(const num of nums) {
    sum += num;
  }
  if(sum % 2 != 0) return false;
  let k = sum / 2;
  let n = nums.length;
  let dp = new Array(k+1).fill(0)
  dp[0] = 1;
  for(let i = 1; i <= n; i++) {
    let num = nums[i];
    for(let j = k; j >= num; j--) {   // 倒序遍历
      dp[j] = dp[j] + dp[j-num];
    }
  }
  return dp[k] != 0;
};