/*算法流程：
  (1)特判，对于数组长度 n，如果数组为 null 或者数组长度小于 3，返回 []。
  (2)对数组进行排序。
  (3)遍历排序后数组：
    若 nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 0，直接返回结果。
    对于重复元素：跳过，避免出现重复解
    令左指针 L=i+1，右指针 R=n-1，当 L<R时，执行循环：
    当 nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,R移到下一位置，寻找新的解
    若和大于 0，说明 nums[R] 太大，R 左移
    若和小于 0，说明 nums[L] 太小，L 右移
*/

var threeSum = function(nums) {
  if(nums == null || nums.length < 3) return [];
  let len = nums.length;
  nums.sort((a,b) => a-b);
  let res = [];
  for(let i = 0; i < len-2; i++) {
    if(nums[i] > 0) break;  // 如果当前数字大于0，则三数之和一定大于0，所以结束循环
    if(i > 0 && nums[i] == nums[i-1]) continue;  // 去重
    let left = i+1, right = len - 1;
    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if(sum == 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while(left < right && nums[left] == nums[left+1]) left++; // 去重
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