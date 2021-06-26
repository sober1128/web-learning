// 560 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
var subarraySum = function(nums, k) {
  let map = new Map();
  map.set(0, 1);
  let count = 0, pre = 0;
  for(let i = 0; i < nums.length; i++) {
    pre += nums[i];
    if(map.has(pre-k)) {
      count += map.get(pre-k);
    } 
    if(map.has(pre)) {
      map.set(pre, map.get(pre)+1);
    } else {
      map.set(pre, 1);
    }
  }
  return count;
}