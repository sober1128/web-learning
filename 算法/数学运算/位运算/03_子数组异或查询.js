//  1310

// 时间复杂度：O(nm)   空间复杂度：O(n)
var xorQueries = function(arr, queries) {
  let ans = [], res = 0;;
  for(let query of queries) {
    let L = query[0], R = query[1];
    for(let i = L; i <= R; i++) {
      res ^= arr[i];
    }
    ans.push(res);
    res = 0;
  }
  return ans;
};

// 时间复杂度：O(n + m)   空间复杂度：O(n) 其中 n 是数组arr 的长度，m 是数组 queries 的长度。需要遍历数组arr 一次，计算前缀异或数组的每个元素值，然后对每个查询分别使用 O(1) 的时间计算查询结果。

var xorQueries = function(arr, queries) {
  const n = arr.length;
  const xors = new Array(n+1).fill(0);
  for(let i = 1; i < n; i++) {
    xors[i+1] = arr[i] ^ xors[i];
  }
  const m = queries.length;
  const ans = new Array(m).fill(0);
  for(let i = 0; i < m; i++) {
    // let L = query[i][0], R = query[i][1];
    const [L, R] = queries[i];
    ans[i] = xors[L] ^ xors[R+1];
  }
  return ans;
}