var findDisappearedNumbers = function(nums) {
  let res = [];
  for(let i = 0; i < nums.length; i++) {
    while(nums[i] > 0 && nums[i] <= nums.length && nums[nums[i]-1] != nums[i]) {
      [nums[nums[i]-1], nums[i]] = [nums[i], nums[nums[i]-1]];
    }
  }
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] != i+1) {
      res.push(i+1);
    }
  }
  return res;
};