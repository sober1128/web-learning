/*
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  // if(!nums.length) return 0;    //空数组--
  let n = nums.length
  //判断是否是第一个或者最后一个缺失，这样判断了下面二分查找就不用处理边界值了
  if(nums[0] != 0) return 0;  // 包含了空数组的情况
  if(nums[n-1] != n)  return n;

  let left = 0, right = n - 1
   //每一次循环都会把区间缩小，最后只剩左右区间挨着，他们中间的数即为缺失的数，判断分界点的时候就可以直接return
  while(left <= right) {
    let mid = Math.floor((left+right) / 2)
    if(nums[mid] == mid){  //如果此点的值与索引号对应，说明在此点之后缺失
      //判断是否是在分界点缺失
      if(nums[mid+1] != mid+1) return mid+1;
      left = mid + 1
    } else {
      //判断是否是在分界点缺失
      if(nums[mid-1] == mid-1) return mid
      right = mid - 1
    } 
  }
};