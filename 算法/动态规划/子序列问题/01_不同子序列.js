/*
  给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。
  字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）
  https://leetcode-cn.com/problems/distinct-subsequences/solution/bu-tong-de-zi-xu-lie-by-leetcode-solutio-urw3/
*/

var numDistinct = function(s, t) {
  let m = s.length, n = t.length
  if(m < n) return 0
  let dp = new Array(m+1)
  for(let i = 0; i <= m; i++) {
    dp[i] = new Array(n+1)
    dp[i][n] = 1
  }
  for(let j = 0; j < n; j++) {
    dp[m][j] = 0
  }
  for(let i = m - 1; i >= 0; i--) {
    for(let j = n - 1; j >= 0; j--) {
      if(s[i] == t[j]){
        dp[i][j] = dp[i+1][j+1] + dp[i+1][j]
      } else {
        dp[i][j] = dp[i+1][j]
      }
    }
  }
  return dp[0][0]
}