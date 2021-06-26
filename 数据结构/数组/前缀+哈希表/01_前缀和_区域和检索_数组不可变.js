// 303 给定一个整数数组  nums，求出数组从索引 i 到 j（i ≤ j）范围内元素的总和，包含 i、j 两点。

var NumArray = function(nums) {
  let n = nums.length;
  this.newNums = new Array(n+1).fill(0);
  for(let i = 0; i < n; i++) {
    thiss.newNums[i+1] = nums[i] + this.newNums[i];   // 前缀和
  }
}

NumArray.prototype.sumRange = function(left, right) {
  return this.newNums[right+1] - this.newNums[left];
}