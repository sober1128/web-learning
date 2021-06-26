// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

// 位运算  a ^ a = 0 ^ b = b
// a. 对于出现三次的数字，各位出现的次数都是 3 的倍数
// b. 统计所有数字的各二进制位中 1 的个数，并对3取余，结果为只出现一次的数字
var singleNumber = function(nums){
  let res = 0
  for(let i = 0; i < 32; i++){
    let cnt = 0   //记录当前 bit 有多少个1
    let bit = 1 << i    //记录当前要操作的 bit
    for(let j = 0; j < nums.length; j++){
      if(nums[i] & bit) cnt++
    }
    if(cnt % 3 != 0) //不等于0说明唯一出现的数字在这个 bit 上是1
    res = res | bit
  }
  return res
}

// 位运算--- 有限状态自动机  用两个二进制位表示3个状态 00--01--10--00...
var singleNumber = function(nums) {
  let ones = 0, twos = 0
  for (const num of nums) {
      ones = ones ^ num & ~twos
      twos = twos ^ num & ~ones
  }
  return ones
  // 遍历完所有数字后，各二进制位都处于状态 00 和状态 01 （取决于 “只出现一次的数字” 的各二进制位是 1 还是 0 ），而此两状态是由 ones 来记录的（此两状态下 twos 恒为 00 ），因此返回 ones 即可。
};