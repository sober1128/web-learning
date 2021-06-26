// offer57 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。

// 暴力法---超出时间限制
var twoSum = function(nums, target) {
  let res = []
  for(let i = 0; i < nums.length - 1; i++) {
    for(let j = i+1; j < nums.length; j++) {
      if(nums[i] + nums[j] == target) {
        res = [nums[i], nums[j]]
        break
      }
    }
  }
  return res
};

// 两个指针的方法  从两头向中间找
var twoSum = function(nums, target) {
  let i = 0, j = nums.length - 1
  while(i < j) {
    if(nums[i] + nums[j] == target) {
      return [nums[i], nums[j]]
    }
    if(nums[i] + nums[j] > target) {
      j--
    }
    if(nums[i] + nums[j] < target) {
      i++
    }
  }
  return -1;
};
