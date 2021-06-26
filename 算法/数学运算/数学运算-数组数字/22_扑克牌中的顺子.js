/* 
   分治思想 五张牌构成顺子的充分条件需要满足
   1. 不重复 使用Set去重
   2. max - min < 5 最大牌值 减去 最小牌值 小于5 且跳过大小王
*/


// 集合+遍历
var isStraight = function(nums) {
  let set = new Set()
  let max = 0, min = 14   //min和max的初始值是两个边界值[0, 13]
  for(const num of nums) {    //const in ...是错误的！！！
    //for..in循环用来遍历对象的可枚举属性列表
    //for..of遍历所有值
    if(num == 0) continue;    //跳过大小王
    if(set.has(num)) return false
    set.add(num)
    max = Math.max(max, num)
    min = Math.min(min, num)
  }
  return max - min < 5
};

// 排序+遍历
var isStraight = function(nums) {
  nums = nums.sort((a,b) => a - b)
  let joker = 0
  for(let i = 0; i < nums.length - 1; i++) {  //涉及到i+1，所以遍历到 len - 1
    if(nums[i] == 0) joker += 1;   //统计大小王数量
    else if(nums[i] == nums[i+1]) return false   // else if 先判断是否为0再判断相等
  }
  return nums[4] - nums[joker] < 5    //最大牌 - 最小牌 < 5 则可构成顺子
}

var isStraight = function(nums) {
  // 先将 nums 从小到大进行排序，再把数组中的 0 去掉
  nums = nums.sort((a,b) => a - b).filter(item => item !== 0)
  // 找出数组中的最大数与最小数，分别在数组的头和尾，判断它们的差是否超过 4，超过则说明不是连续的
  if(nums[nums.length - 1] - nums[0] > 4) return false
  // 遍历数组找出是否有重复的数字，因为涉及到 i + 1，所以遍历长度是 数组长度-1
  for(let i = 0; i < nums.length-1; i++) {
    if(nums[i] === nums[i+1]) return false
  }
  return true
}