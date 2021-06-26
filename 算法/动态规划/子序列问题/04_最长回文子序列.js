// 给定一个字符串s，找到其中最长的回文子序列，并返回该序列的长度。可以假设s的最大长度为 1000 。
var longestPalindromeSubseq = function(s) {
  let n = s.length
  let dp = new Array(n)
  for(let i = 0; i < n; i++) {
    dp[i] = new Array(n)
    dp[i][i] = 1
  }
  // 反着遍历保证正确的状态转移
  for(let i = n - 1; i >= 0; i--) {
    for(let j = i + 1; j < n; j++) {
      //状态转移方程
      if(s[i] == s[j]) {
        dp[i][j] = dp[i+1][j-1] + 2
      } else {
        dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])
      }
    }
  }
  // 整个s的最长回文子串长度
  return dp[0][n-1]
};