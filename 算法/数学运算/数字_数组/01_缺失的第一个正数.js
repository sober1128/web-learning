// O(n^2) 的方法
const firstMissingPositive = (nums) => {
  let i = 0, res = 1;
  while(i < nums.length) {
    if(nums[i] == res) {
      res++;
      i = 0;
    } else {
      i++;
    }
  }
  return res;
}

// 时间空间均为O(n)的 代码
const firstMissingPositive = (nums) => {
  const set = new Set();
  for(let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  for(let i = 1; i <= nums.length; i++) {
    if(!set.has(i)) {
      return i;
    }
  }
}

// 原地哈希---https://leetcode-cn.com/problems/first-missing-positive/solution/tong-pai-xu-python-dai-ma-by-liweiwei1419/
var firstMissingPositive = function(nums) {
  let len = nums.length;
  for(let i = 0; i < len; i++) {
    while(nums[i] > 0 && nums[i] <= len && nums[nums[i]-1] != nums[i]) {
      // 满足在指定范围内、并且没有放在正确的位置上，才交换
      // 例如：数值 3 应该放在索引 2 的位置上
      [nums[nums[i]-1], nums[i]] = [nums[i], nums[nums[i]-1]];    //交换
    }
  }

  for(let i = 0; i < len; i++) {
    if(nums[i] != i+1) {
      return i+1;
    }
  }
  //  都正确则返回数组长度 + 1
  return len+1;
};
