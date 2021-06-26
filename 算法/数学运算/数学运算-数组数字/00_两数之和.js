//  第一题：给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。

// 1. 暴力法--双重循环
var twoSum = function(nums, target) {
  var len = nums.length
  for (var i = 0; i < len - 1; i++) {
      for (var j = i + 1; j < len; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};
// 2. 哈希表
var twoSum = function(nums, target) {
  let len = nums.length;
  let map = new Map();
  for(let i = 0; i < len; i++) {
    let other = target-nums[i];
    if(map.has(other)) {
      return [map.get(other), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

// 第167题：给定一个已按照 [升序排列] 的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target。
// 1. 二分查找
// 2.哈希表
var twoSum = function(numbers, target) {
  var m = new Map();
  for(let i = 0; i<numbers.length; i++){
      var cur = target - numbers[i]
      if(m.has(cur)){
          return [m.get(cur), i+1]
      }else{
          m.set(numbers[i], i+1)
      }
  }
  return []
};

// 3.双指针
var twoSum = function(numbers, target) {
  let i = 0, j = numbers.length-1;
  while(i < j) {
    let sum = numbers[i] + numbers[j];
    if(sum == target) {
      return [i+1, j+1];
      break;
    } else if(sum > target) {
      j--;
    } else {
      i++;
    }
  }
};