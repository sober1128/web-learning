//  暴力法遍历
const subarraySum = (nums, k) => {
  let count = 0;
  for(let i = 0; i < nums.length; i++) {
    let sum = 0;
    for(let j = i; j < nums.length; j++) {
      sum += nums[j];
      if(sum == k) {
        count++;
      }
    }
  }
  return count;
}

//  引入前缀和 --- 让 -1 情况下的前缀和为 0，这样通式在边界情况也成立。即在遍历之前，map 初始放入 0:1 键值对。
//  https://leetcode-cn.com/problems/subarray-sum-equals-k/solution/dai-ni-da-tong-qian-zhui-he-cong-zui-ben-fang-fa-y/
const subarraySum = (nums, k) => {
  const map = new Map();
  map.set(0, 1);
  let pre = 0;
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
    pre += nums[i];

    if(map.has(pre-k)) {
      count += map.get(pre-k);
    }

    if(map.has(pre)) {
      map.set(pre, map.get(pre)+1);
    } else {
      map.set(pre, 1);
    }
  }

  return count;
}






var checkSubarraySum = function(nums, k) {
  if(nums.length < 2) return false;
  let map = new Map();
  map.set(nums[0], 1)
  let pre = nums[0];
  for(let i = 1; i < nums.length; i++) {
    pre += nums[i];
    if(map.has(pre-k)) {
      return true;
    }
    if(map.has(pre)) {
      map.set(pre, map.get(pre)+1);
    } else {
      map.set(pre, 1);
    }
  }
  return false;
};

