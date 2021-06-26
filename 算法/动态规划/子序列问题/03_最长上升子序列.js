var lengthOfLIS = function(nums) {    //错误
  if(!nums || nums.length == 0) return 0
  let len = nums.length
  let dp = new Array(len)
  dp[0] = 1
  for(let i = 1; i < len; i++) {
    dp[i] = nums[i] > nums[i-1] ? dp[i-1]+1 : dp[i-1]
  }
  return dp[len-1]
};

// [4,10,4,3,8,9]  输出4  预期3

var lengthOfLIS = function(nums) {
  if(!nums || nums.length == 0) return 0;
  let len = nums.length
  if(len == 1) return 1;
  let dp = new Array(len).fill(1)
  for(let i = 1; i < len; i++) {
    for(let j = 0; j < i; j++) {
      if(nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j]+1)
      }
    }
  }
  let res = 0
  for(let i = 0; i < len; i++) {
    res = Math.max(res, dp[i])
  }
  return res;
}

//   https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-er-fen-cha-zhao-tan-xin-suan-fa-p/

var lengthOfLIS = function(nums) {
  let len = 1, n = nums.length
  if(n == 0) return 0;
  let d = new Array(n+1)
  d[len] = nums[0]
  for(let i = 1; i < n; i++) {
    if(nums[i] > d[len]) {
      d[++len] = nums[i]    //把nums[i]加入
    } else {
      let l = 1, r = len, pos = 0   //如果找不到说明所有的数都比 nums[i] 大，此时要更新 d[1]，所以这里将 pos 设为 0
      while(l <= r) {
        let mid = (l + r) >> 1
        if(d[mid] < nums[i]) {
          pos = mid
          l = mid + 1
        } else {
          r = mid - 1
        }
      }
      d[pos + 1] = nums[i]    //找到大于nums[i]的那个位置，替换成nums[i]
      // 依次进行， 如果我新的答案比第一次答案长， 整个序列被替换，如果没有第一个长，我替换的次数不够，原来方案一里最大的数字还在末尾， 原始的d的长度不会被替换。那么我们始终能用d的长度表示我们的结果。
    }
  }
  return len;
}