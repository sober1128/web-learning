// 给定正整数 n，找到若干个完全平方数（比如 1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。

// 给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。

var numSquares = function(n) {
  let dp = new Array(n+1).fill(0);
  dp[0] = 0;
  for(let i = 1; i <= n; i++) {
    dp[i] = i;
    for(let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j*j]+1);
    }
  }
  return dp[n];
};


var numSquares = function(n) {
  const f = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
      let minn = Number.MAX_VALUE;
      for (let j = 1; j * j <= i; j++) {
          minn = Math.min(minn, f[i - j * j]);
      }
      f[i] = minn + 1;
  }
  return f[n];
};

// https://leetcode-cn.com/problems/perfect-squares/solution/wan-quan-ping-fang-shu-by-leetcode-solut-t99c/

// 四平方和定理证明了任意一个正整数都可以被表示为至多四个正整数的平方和。这给出了本题的答案的上界。
