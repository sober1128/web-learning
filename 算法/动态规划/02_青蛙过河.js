var canCross = function (stones) {
  return helper(stones, 0, 0);
}

function helper(stones, index, k) {
  for(let i = index+1; i < stones.length; i++) {
    const gap = stones[i] - stones[index];
    if(gap >= k-1 && gap <= k+1) {
      if(helper(stones, i, gap))  return true;
    } else if(gap > k+1) {
      break;
    }
  }
  return index == stones.length - 1;
}

//  记忆化递归
var canCross = function(stones) {
  let set = new Set();
  return hepler(stones, 0, 0, set);
};

function hepler(stones, index, k, set) {
  let key = index * 1000 + k;
  if(set.has(key)) {
    return false;
  } else {
    set.add(key);
  }

  for(let i = index+1; i < stones.length; i++) {
    let gap = stones[i] - stones[index];
    if(gap >= k-1 && gap <= k+1) {
      if(hepler(stones, i, gap, set)) return true;
    } else if(gap > k+1) {
      break;
    }
  }
  return index == stones.length - 1;
}

//  动态规划
var canCross = function(stones) {
  const len = stones.length;
  const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
  dp[0][0] = true;
  if(stones[1] > 1) return false;

  for(let i = 1; i < len; i++) {
    for(let j = 0; j < i; j++) {
      let k = stones[i] - stones[j];
      
    }
  }
}