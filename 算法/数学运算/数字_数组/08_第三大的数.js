var thirdMax = function(nums) {
  nums = [...new Set(nums)];
  nums.sort((a,b) => b-a);    // 降序排列
  let res = nums[0];
  if(nums.length >= 3) {
    res = nums[2];
  }
  return res;
}

var thirdMax = function(nums) {
  nums.sort((a,b) => b-a);    // 降序排列
  let res = nums[0], n = nums.length;
  let count = 2;
  // if(n < 3) return nums[0];
  for(let i = 1; i < n; i++) {
    if(count > 0) {
      if(res == nums[i]) {
        continue;
      } else {
        count--;
        res = nums[i];
      }
    }
  }
  return count == 0 ? res : nums[0];
}