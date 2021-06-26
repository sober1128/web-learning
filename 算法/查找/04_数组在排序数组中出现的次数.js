// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/solution/shuang-jie-fa-sou-suo-zuo-you-bian-jie-xun-huan-fa/
//从两边向中间遍历
var search = function(nums, target) {
  if(!nums.length) return 0
  let left = 0, right = nums.length - 1
  while(nums[left] !== target && left < nums.length) {
    left++
  }
  while(nums[right] !== target && right >= 0) {
    right--
  }
  return left <= right ? right - left + 1 : 0
}

var search = function(nums, target) {
  let result=0;
  for(let i =0;i<nums.length;i++){
      if(nums[i]===target){
          result++
      }
  }
  return result
  };

// 二分查找
var search = function(nums, target) {
  const len = nums.length
  let start = -1, end = -1
  let left = 0, right = len - 1

  // 找到左边界：找到第一次出现
  while(left <= right) {
    let mid = Math.floor((left+right) / 2)
    if(nums[mid] == target) {
      start = mid
      right = mid - 1   // important！
    } else if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  left = 0, right = len - 1
  while(left <= right) {
    let mid = Math.floor((left+right) / 2)
    if(nums[mid] == target) {
      end = mid
      left = mid + 1   // important！
    } else if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }

  return (start !== -1) && (start <= end) ? end - start + 1 : 0
}