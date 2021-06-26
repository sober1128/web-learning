// 未知第一个元素，通过已知条件求出第一个元素
var decode = function(encoded, first) {
  let n = encoded.length;
  const arr = new Array(n+1);
  arr[0] = first;
  for(let i = 1; i <= n; i++) {
    arr[i] = arr[i-1] ^ encoded[i-1];
  }
  return arr;
};