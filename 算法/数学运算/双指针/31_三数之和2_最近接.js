/*
解题思路
标签：排序和双指针
作者：guanpengchn
链接：https://leetcode-cn.com/problems/3sum-closest/solution/hua-jie-suan-fa-16-zui-jie-jin-de-san-shu-zhi-he-b/

*/
var threeSumClosest = function(nums, target) {
  // if(nums == null || nums.length < 3) return [];   
  nums.sort((a,b) => a-b);
  let len = nums.length;
  let res = nums[0] + nums[1] + nums[2];
  for(let i = 0; i < len-2; i++) {
    let left = i+1, right = len-1;
    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if(Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
      if(sum > target) {
        right--;
      } else if(sum < target) {
        left++;
      } else {
        return res;
      }
    }
  }
  return res;
}