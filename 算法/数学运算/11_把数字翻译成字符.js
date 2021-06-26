var translateNum = function(num) {
  let s = num.toString()
  let n = num.length
  let dp = new Array(n)
  dp[0] = dp[1] = 1
  for(let i = 2; i <= n; i++) {
    let temp = s.slice(i-2, i)    //截取两个字符
    dp[i] = ((temp >= (10+'')) && (temp <=( 25+''))) ? dp[i-1]+dp[i-2] : dp[i-1]
  }
  return dp[n]
};