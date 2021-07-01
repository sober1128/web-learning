// https://leetcode-cn.com/problems/ju-qing-hong-fa-shi-jian/
var getTriggerTime = function(increase, requirements) {
  let n = increase.length;
  const arr = new Array(n+1).fill(0).map(() => new Array(3).fill(0));
  let res = [];
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < 3;j++) {
      arr[i+1][j] = arr[i][j] + increase[i][j];
    }
  }
  for(let q of requirements) {
    let l = -1, r = n+1;
    while(l+1 < r) {
      let mid = (l+r) >> 1;
      if(arr[mid][0] >= q[0] && arr[mid][1] >= q[1] && arr[mid][2] >= q[2]) {
        r = mid;
      } else {
        l = mid;
      }
    }
    if(r == n+1) r = -1;
    res.push(r);
  } 
  return res;
}