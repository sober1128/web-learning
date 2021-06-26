var singleNumber = function(nums) {
  let n = nums.length, map = {}
  for(let i = 0; i < n; i++) {
    map[nums[i]] ? map[nums[i]]++ : map[nums[i]] = 1
  }
  for(let i = 0; i < n; i++) {
    if(map[nums[i]] == 1){
      return nums[i]
    }
  }
}

var singleNumber = function(nums) {
  let res = 0
  for(let i = 0; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res;
}

var singleNumber = function(nums) {
  return nums.reduce((pre, cur) => {
    return pre ^ cur
  },0)
}