// 一个整型数组 nums 里除两个数字之外，其他数字都出现了两次。请写程序找出这两个只出现一次的数字。要求时间复杂度是O(n)，空间复杂度是O(1)。

//对象---时间复杂度：O(n)，我们只需要遍历数组1次和遍历对象一次 空间复杂度O(n)
var singleNumbers = function(nums) {
  let map = {}, n = nums.length, res = []
  for(let i = 0; i < n; i++) {
    map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
  }
  for(let i = 0; i < n; i++){
    if(map[nums[i]] == 1){
      res.push(nums[i])
    }
  }
  return res
};

//使用map---时间复杂度：O(n)，我们只需要遍历数组1次。 空间复杂度：O(n)。
var singleNumbers = function(nums) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
    if(map.has(nums[i])) {
      map.delete(nums[i])
    } else {
      map.set(nums[i], 1)
    }
  }
  return [...map.keys()]
}

/*先对所有数字进行一次异或，得到两个出现一次的数字的异或值。
在异或结果中找到任意为 11 的位。
根据这一位对所有的数字进行分组。
在每个组内进行异或操作，得到两个数字。

异或满足交换律，第一步异或，相同的数其实都抵消了，剩下两个不同的数。这两个数异或结果肯定有某一位为1，不然都是0的话就是相同数。找到这个位，不同的两个数一个在此位为0，另一个为1。按此位将所有数分成两组，分开后各自异或，相同的两个数异或肯定为0（而且分开的时候，两个数必为一组）。剩下的每组里就是我门要找的数。*/


// 位运算  136只出现一次的数字1  137只出现一次的数字2   645错误的集合
// https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/zhi-chu-xian-yi-ci-de-shu-xi-lie-wei-yun-suan-by-a/
// 260只出现一次的数字3---本题

var singleNumbers = function(nums){
  let temp = 0
  nums.forEach(t => {
    temp ^= t     //temp为整租数据异或完的结果
  })
  let flag = 1
  while((temp & flag) === 0) {
    flag <<= 1    //找到temp最低位为1的位
  }
  let n = 0, m = 0
  nums.forEach(t => {
    if((t & flag) === 0) {    //分组的标准是某一位是0还是1，两个相同的数字某一位是相同的，那么出现两次的数字肯定被分到同一个组中
      n ^= t
    } else {
      m ^= t
    }
  })
  return [n, m]
}