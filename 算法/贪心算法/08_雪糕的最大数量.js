// 排序 + 前缀和 + 贪心
var maxIceCream = function(costs, coins) {
  costs.sort((a,b) => a-b);
  const n = costs.length;
  const res = new Array(n).fill(0);
  res[0] = costs[0];
  let count = 0;
  for(let i = 1; i < n; i++) {
    res[i] = costs[i]+res[i-1];
  }
  // console.log(res);
  for(let j = 0; j < n; j++) {
    if(res[j] <= coins) {
      count++;
    }
  }
  return count;
};

// 时间复杂度：O(nlogn)，数组排序的时间复杂度是 O(nlogn)，遍历数组的时间复杂度是 O(n)
// 空间复杂度： O(n)。前缀和数组的额外空间

var maxIceCream = function(costs, coins) {
  costs.sort((a,b) => a-b);
  const n = costs.length;
  let befores = [0];
  for(let i = 0; i < n; i++) {
    let before = costs[i] + befores[i];
    if(before > coins) {
      return i;
    }
    befores.push(before);
  }
  return n;
}

var maxIceCream = function(costs, coins) {
  costs.sort((a,b) => a-b);
  let count = 0;
  const n = costs.length;
  for(let i = 0; i < n; i++) {
    const cost = costs[i];
    if(coins >= cost) {
      coins -= cost;
      count++;
    } else {
      break;
    }
  }
  return count;
}