/*  这里分两种情况进行讨论：
如果两个数的首位不相同时(例如205和4):要使拼接结果最小，那肯定是 首位小的排在前面
如果两个数的首位相同时(例如3和34):要使拼接结果最小，那需要比较两种拼接结果的大小，考虑拼接结果较小的那种情况

作者：comprehensive
链接：https://leetcode-cn.com/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof/solution/pythonjie-jue-tong-su-yi-dong-by-compreh-6b9z/
*/

var minNumber = function(nums) {
  const len = nums.length
  if(len === 0) return ""
  let str = []
  for(let num of nums) {
    str.push(num.toString())
  }
  str.sort((s1, s2) => {
    if(s1.charAt(0) !== s2.charAt(0)) {
      return s1.charCodeAt(0) - s2.charCodeAt(0)      //如果第一个数字不相等，升序排列
    } else {    // 剩下的话就是相等的情况，就比较拼接的大小
      const tmp1 = s1.concat(s2), tmp2 = s2.concat(s1)
      return tmp1 - tmp2;
    }
    // return 0
  })
  return str.join("")
};


var minNumber = function(nums) {
  return nums.sort((a, b) => ('' + a + b) - ('' + b + a)).join('');
}

var minNumber = function(nums) {
  quickSort(nums, 0, nums.length - 1)
	return nums.join('')
}
function quickSort(nums, start, end) {
  if(start >= end) return;
  let l = start, r = end
  const target = nums[start]
  while(l < r) {
    while((target + '' + nums[r]) <= (nums[r] + '' + target) && l < r) {
      r--
    }
    nums[l] = nums[r]
    while((target + '' + nums[l]) > (nums[l] + '' + target) && l < r) {
      l++
    }
    nums[r] = nums[l]
  }
  nums[l] = target
  quickSort(nums, start, l-1)
  quickSort(nums, l+1, end)
  return nums;
}


// ---快速排序---
function quickSort(array, start, end){
  if(end <= start) {
    return
  }
  const  target = array[start];
  let l = start, r = end;
  while(l < r){
    while(l < r && array[r] >= target){
      r--
    }
    array[l] = array[r]
    while(l < r && array[l] < target){
      l++
    }
    array[r] = array[l]
  }
  array[l] = target
  quickSort(array, start, l-1)
  quickSort(array, l+1, end)
  return array
}