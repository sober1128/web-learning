// 方法1  暴力枚举 时间复杂度O(n^3)  空间复杂度O(1)

var longestPalindrome = function(s) {
  function isPalindrome(str) {
    let len = str.length;
    let mid = parseInt(len/2);
    for(let i = 0; i < mid; i++) {
      if(str[i] != str[len-1-i]) {
        return false;
      }
    }
  }

  let ans = '';
  let max = 0;
  let n = s.length;
  for(let i = 0; i < n; i++) {
    for(let r = i+1; r <= n; r++) {
      let tmpStr = s.substring(i, r);
      if(isPalindrome(tmpStr) && tmpStr.length > max) {
        ans = tmpStr;
        max = tmpStr.length;
      }
    }
  }
  return ans;
};

// https://leetcode-cn.com/problems/longest-palindromic-substring/solution/5-zui-chang-hui-wen-zi-chuan-by-alexer-660/
// 动态规划
var longestPalindrome = function(s) {
  if(!s || s.length < 2) {
      return s;
  }         
  // 动态转移方程：dp[i][j] = dp[i+1][j-1] && s[i] == s[j]
  // j - i < 2：意即子串是一个长度为0或1的回文串
  let n = s.length, res = '';
  let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for(let i = n-1; i >= 0; i--) {
    for(let j = i; j < n; j++) {
      dp[i][j] = (s[i] == s[j]) && (j-i<2 || dp[i+1][j-1]);
      if(dp[i][j] && j-i+1 > res.length) {
          res = s.substring(i, j+1);
      }
    }
  }
  return res;
}

//  中心扩展法
var longestPalindrome = function(s) {
  if(s.length < 2) return s;
  let res = '';
  for(let i = 0; i < s.length; i++) {
    helper(i,i);   // 回文子串长度是奇数
    helper(i, i+1);  // 回文子串长度是偶数
  }
  function helper(m, n) {
    while(m >= 0 && n < s.length && s[m] == s[n]) {
       m--;
       n++;
    }
    // 注意此处m,n的值循环完后  是恰好不满足循环条件的时刻
    // 此时m到n的距离为n-m+1，但是mn两个边界不能取 所以应该取m+1到n-1的区间  长度是n-m-1
    if(n-m-1 > res.length) {
        // slice取[m+1, n-1]这个区间
        res = s.slice(m+1, n);
    }
  }
  return res;
}