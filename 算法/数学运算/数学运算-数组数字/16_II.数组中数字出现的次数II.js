// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

var singleNumber = function(nums) {
  let map = {}, len = nums.length;
  for(let i = 0; i < len; i++) {
    map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
  }
  for(let i = 0; i < len; i++) {
    if(map[nums[i]] == 1) {
      return nums[i]
    }
  }
}

// 有限状态自动机
// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/solution/mian-shi-ti-56-ii-shu-zu-zhong-shu-zi-chu-xian-d-4/
var singleNumber = function(nums) {
  let ones = 0, twos = 0

    for (const num of nums) {
        ones = ones ^ num & ~twos
        twos = twos ^ num & ~ones
    }

    return ones
};

// 遍历统计
var singleNumber = function(nums) {
  let counts = new Array(32);
  for(let num of nums) {
    for(let j = 0; j < 32; j++) {
      // 使用 与运算 ，可获取二进制数字 num 的最右一位 
      counts[j] += num & 1;   // 更新第 j 位
      // 配合 无符号右移操作 ，可获取 num 所有位的值（即 n1~n32
      num >>>= 1;   // 第 j 位 --> 第 j + 1 位
    }
  }
  // 实际上，只需要修改求余数值 mm ，即可实现解决 除了一个数字以外，其余数字都出现 mm 次 的通用问题。
  let res = 0, m = 3;
  for(let i = 0; i < 32; i++) {
    res <<= 1;   // 左移 1 位
    // 恢复第 i 位的值到 res
    res |= counts[31-i] % m;   // 得到 只出现一次的数字 的第 (31 - i) 位
  }
  return res;
}


var singleNumber = function(nums) {
  let res = 0;
  for(let i = 0; i < 32; i++) {
    let cnt = 0;
    let bit = 1 << i;
    for(let j = 0; j < nums.length; j++) {
      if(nums[j] & bit) cnt++;
    }
    if(cnt % 3 != 0) res = res | bit;
  }
  return res;
}