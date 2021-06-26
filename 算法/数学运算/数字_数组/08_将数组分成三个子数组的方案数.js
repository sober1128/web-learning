//  1712 给你一个 非负 整数数组 nums
// 数组被分成三个 非空 连续子数组，从左至右分别命名为 left ， mid ， right 。
// left 中元素和小于等于 mid 中元素和，mid 中元素和小于等于 right 中元素和。


// 二分查找
var waysToSplit = function(nums) {
  let n = nums.length;
  let sum = new Array(n+1);
  sum[0] = nums[0];
  for(let i = 1; i <= n; i++) {
    sum[i] = sum[i-1] + nums[i];  // 前缀和
  }
  let mod = Math.poe(10, 9) + 7;
  let ans = 0;
  for(let i = 1; i < n; i++) {
    if(sum[i] > sum[n]) break;

    // 第一次二分找右边界
    let l = i+1, r = n-1;
    while(l <= r) {
      let mid = Math.floor((l+r)/2);
      if(sum[n]-sum[mid] >= sum[mid] - sum[i]) {
        l = mid+1;
      } else {
        r = mid-1;
      }
    }
    // 第二次二分找左边界
    let ll = i + 1, rr = n - 1;
    while(ll <= rr) {
      let mid = (ll + rr) / 2;
      if(sum[mid] - sum[i] >= sum[i]) {
          rr = mid - 1;
      } else {
          ll = mid + 1;
      }
    }
    ret += r - ll + 1;
  }
  return ret % M;
}

//  三指针 ---  时间复杂度：O(n)  空间复杂度：O(n)
// 在前缀数组上枚举第一刀 i 的位置，对于每个 i 我们寻找第二刀最小的 l 和最大的 r，分别满足 sum[l] - sum[i] >= sum[i] 和 sum[n] - sum[r] >= sum[r] - sum[i]，即sum(mid) >= sum(left) 和 sum(right) >= sum(mid)，这两个条件满足单调性，可以利用三指针求解。
var waysToSplit = function(nums) {
  let n = nums.length;
  let sum = new Array(n+1);
  sum[0] = nums[0];
  for(let i = 1; i <= n; i++) {
    sum[i] = sum[i-1] + nums[i];  // 前缀和
  }
  let mod = Math.poe(10, 9) + 7;
  let ans = 0;
  // |______|________|_______|________|
  // 1      i        l       r        n
  // i 表示第一刀的位置，枚举第一刀的位置，计算第二刀的可选位置数
  for(let i = 1, l = 2, r = 2; i < n; i++) {
    l = Math.max(i+1, l);
    r = Math.max(i+1, r);
    // sum(mid) >= sum(left)
    while(l <= n-1 && sum[l] - sum[i] < sum[i]) {
      l++;
    }
    // sum(right) >= sum(mid)，r最大为n-1，right保证要有一个数
    while(r <= n-1 && sum[n] - sum[r] < sum[r] - sum[i]) {
      r++;
    }
    if(l <= r) {
      ans += r-l;
    }
  }
  return ans % mod;
}