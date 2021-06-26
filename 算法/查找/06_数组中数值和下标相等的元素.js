// offer 267----找第一个相等 和最后一个相等的下标  截取？
var sameNumber = function(nums) {
  if(!nums.length) return -1;
  let n = nums.length
  let left = 0, right = n - 1
  while(left <= right) {
    let mid = Math.floor((left+right) / 2)
    if(nums[mid] == mid) {
      return mid
    } 
    if(nums[mid] > mid){
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}

let num1 = [0,2,3,5]
console.log(sameNumber(num1));