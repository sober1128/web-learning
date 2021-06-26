/*
  给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。
*/

var threeSumClosest = function(nums, target) {
  if(nums == null || nums.length < 3) return [];
  nums.sort((a,b) => a-b);
  let res = nums[0] + nums[1] + nums[2];
  let len = nums.length;
  for(let i = 0; i < len-2; i++) {
    let left = i+1, right = len-1;
    let sum = nums[i] + nums[left] + nums[right];
    while(left < right) {
      if(Math.abs(res-target) > Math.abs(sum-target)) {
        res = sum;
      }
      if(sum > target) {
        right--;
      } else if(sum < target) {
        left++;
      } else {
        return sum;
      }
    }
  }
  return res;
};

