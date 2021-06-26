// 525 给定一个二进制数组 nums , 找到含有相同数量的 0 和 1 的最长连续子数组，并返回该子数组的长度。
var findMaxLength = function(nums) {
  let count = 0, maxLen = 0;
  let map = new Map();
  map.set(0, -1);
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] == 1) {
      count++;
    } else {
      count--;    // 当nums[i]=0时取-1的值
    }
    if(map.has(count)) {
      const index = map.get(count);
      maxLen = Math.max(maxLen, i - index);
    } else {
      map.set(count, i);
    }
  }
  return maxLen;
};