// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
//  1. 方法1：使用额外的数组  时间复杂度： O(n)  空间复杂度： O(n)
var rotate = function(nums, k) {
  const n = nums.length;
  const newArr = new Array(n);
  for (let i = 0; i < n; ++i) {
      newArr[(i + k) % n] = nums[i];
  }
  for (let i = 0; i < n; ++i) {
      nums[i] = newArr[i];
  }
};

// 数组翻转
const reverse = (nums, start, end) => {
  while(start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

var rotate = function(nums, k) {
  k = k % nums.length;
  reverse(nums, 0, nums.length-1);
  reverse(nums, 0, k-1);
  reverse(nums,k, nums.length-1);
}