/*
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
  if(nums == null || nums.length < 3) return [];
  let len = nums.length;
  nums.sort((a,b) => a-b);
  let res = [];
  for(let i = 0; i < len-2; i++) {
    if(nums[i] > 0) break;   // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if(i > 0 && nums[i] == nums[i-1]) continue;   // 去重
    let left = i+1, right = len - 1;
    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if(sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);
        // 去重判断！！
        while(left < right && nums[left] == nums[left+1]) left++;
        while(left < right && nums[right] == nums[right-1]) right--;
        left++;
        right--;
      } else if(sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};