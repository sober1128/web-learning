var maxArea = function(height) {
  let len = height.length;
  let left = 0, right = len - 1;
  let res = 0;
  while(left < right) {
    let ans = Math.min(height[left], height[right]) * (right-left);
    res = Math.max(res, ans);
    if(height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return res;
}

// 暴力 ----------- 超出时间限制
var maxArea = function(height) {
  let len = height.length, res = 0;
  for(let i = 0; i < len-1; i++) {
    for(let j = i+1; j < len; j++) {
      let ans =  Math.min(height[i], height[j]) * (j-i);
      res = Math.max(res, ans);
    }
  }
  return res;
};