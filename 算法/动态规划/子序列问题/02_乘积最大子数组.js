/*
  给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
  标签：动态规划
  遍历数组时计算当前最大值，不断更新
  令imax为当前最大值，则当前最大值为 imax = max(imax * nums[i], nums[i])
  由于存在负数，那么会导致最大的变最小的，最小的变最大的。因此还需要维护当前最小值imin，imin = min(imin * nums[i], nums[i])
  当负数出现时则imax与imin进行交换再进行下一步计算
  时间复杂度：O(n)O(n)

*/
var maxProduct = function(nums) {
  // if(!nums ||nums.length == 0) return 0;   //不用！题目说了该数组至少包含一个数字
  // let len = nums.length
  // if(len == 1) return nums[0]
  
  let max = Number.MIN_SAFE_INTEGER, imax = nums[0], imin = nums[0]
  for(let i = 1; i < len; i++) {
    if(nums[i] < 0) {   //如果当前数为负数，则会导致最大变最小，最小变最大，因此要维护当前最小值
      [imax, imin] = [imin, imax]
    }
    imax = Math.max(imax*nums[i], nums[i]);
    imin = Math.min(imin*nums[i], nums[i]);
    max = Math.max(max, imax);
  }
  return max
};

var maxProduct = (nums) => {
  let res = nums[0], len = nums.length
  let min = nums[0], max = nums[0]
  for(let i = 1; i < len; i++){
    let temp1 = min * nums[i],
        temp2 = max * nums[i]
    max = Math.max(temp1, temp2, nums[i])
    min = Math.min(temp1, temp2, nums[i])
    res = Math.max(res, max)
  }
  return max;
}