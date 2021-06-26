// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

var singleNumbers = function(nums) {
  let map= {}, len = nums.length; res = [];
  for(let i = 0; i < len; i++) {
    map[nums[i]] ? map[nums[i]]++ : map[s[i]] = 1;
  }
  for(let i = 0; i < len; i++) {
    if(map[nums[i]] == 1) {
      res.push(nums[i]);
    } 
  }
  return res;
}

// 用位运算
var singleNumbers = function(nums) {
  let temp = 0;
  nums.forEach(t => {
    temp ^= t     // temp就为整组数组异或完的结果
  });
  let flag = 1;
  while((temp & flag) === 0) {
    flag <<= 1;   // 找到temp最低位为1的位
  }
  let n = 0, m = 0;
  nums.forEach(t => {
    if((t & falg) === 0) {    // 分组位运算
      n ^= t;
    } else {
      m ^= t;
    }
  })
  return [n, m];
}