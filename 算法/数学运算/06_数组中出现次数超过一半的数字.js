// 1.排序后的中位数
var majorityElement = function(nums) {
  nums.sort((a,b) => a-b)   //升序排序
  let len = nums.length
  let mid = Math.floor(len / 2)
  return nums[mid]
};

// 摩尔投票法---投我++，不投--，超过一半以上的人投我，那我稳赢哇
var majorityElement = function(nums) {
  let votes = 0
  let x = nums[0]
  for(let i = 0; i < nums.length; i++){
    if(votes == 0) x = nums[i]
    votes = nums[i] == x ? votes+1 : votes-1
  }
  return x
}

// hash计数
var majorityElement = function(nums) {
  let res = {}
  for(let i = 0;i < nums.length; i++) {
    if(res[nums[i]]) {
      res[nums[i]]++
    } else {
      res[nums[i]] = 1
    }
  }
  let max = 0, t = null;
  Object.keys(res).map(k => {
    if(max < res[k]){
      max = res[k]
      t = k
    }
  })
  return t
}

var majorityElement = function(nums) {
  let map = new Map()
  for(let i = 0; i < nums.length; i++) {
    //将数组元素和出现的个数都放进map中
    if(!map[nums[i]]) {
      map[nums[i]] = 1
    } else {
      map[nums[i]]++
    }
  }
  //遍历map中对应的个数超过一半的元素
  for(let item in map) {
    if(map[item] >= Math.ceil(nums.length/2)) {   //向上取整
      return item
    }
  }
}