//  89题

var grayCode = function(n) {
  let res = [0], pre = 1;
  for(let i = 0; i < n; i++) {
    for(let j = res.length-1; j >= 0; j--) {
      res.push(pre + ans[j]);
    }
    pre = pre << 1
  }
  return res;
}

