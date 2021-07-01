// 深度优先搜索
var numWays = function(n, relation, k) {
  let ways = 0;
  const edges = new Array(n).fill(0).map(() => new Array());

  for(const [src, dst] of relation) {
    edges[src].push(dst);
  }

  const dfs = (index, steps) => {
    if(steps === k) {
      if(index === n-1) {
        ways++;
      }
      return;
    }
    const list = edges[index];
    for(const nextIndex of list) {
      dfs(nextIndex, step+1);
    }
  }
  dfs(0, 0);
  return ways;
}
/*
时间复杂度：O(n^k)。最多需要遍历 k 层，每层遍历最多有 O(n) 个分支。
  
空间复杂度：O(n+m+k)。其中 m 为 relation 数组的长度。空间复杂度主要取决于图的大小和递归调用栈的深度，保存有向图信息所需空间为 O(n+m)，递归调用栈的深度不会超过 k。*/
  
// 广度优先搜索
var numWays = function(n, relation, k) {
  const edges = new Array(n).fill(0).map(() => new Array());
  for(const [src, dst] of relation) {
    edges[src].push(dst);
  }
  let steps = 0;
  const queue = [0];
  while(queue || steps < k) {
    steps++;
    for(let i = 0; i < queue.length; i++) {
      const index = queue.shift();
      const list = edges[index];
      for(const nextIndex of list) {
        queue.push(nextIndex);
      }
    }
  }
  let ways = 0;
  if(step == k) {
    while(queue.length) {
      if(queue.shift() == n-1) {
        ways++;
      }
    }
  }
  return ways;
}

// 动态规划
// 计数问题，可以使用动态规划的方法解决
// dp[i][j]为经过i轮传递到编号j的玩家的方案数
// 从编号为0的玩家开始传递，当i=0时，已定位与编号0的玩家，不会传递给其他玩家，边界条件：dp[0][0]=1, dp[0][j]=0
var numWays = function(n, relation, k) {
  const dp = new Array(k+1).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = 1;
  for(let i = 0; i < k; i++) {
    for(const [src, dst] of relation) {
      dp[i+1][dst] = dp[i][src];
    }
  }
  return dp[k][n-1];
}
// 空间复杂度是 O(kn)
// 由于当 i>0 时，dp[i][] 的值只和 dp[i−1][] 的值有关，因此可以将二维数组变成一维数组，将空间复杂度优化到 O(n)。
var numWays = function(n, relation, k) {
  let dp = new Array(n).fill(0);
  dp[0] = 1;
  for (let i = 0; i < k; i++) {
      const next = new Array(n).fill(0);
      for (const [src, dst] of relation) {
          next[dst] += dp[src];
      }
      dp = next;
  }
  return dp[n - 1];
};

