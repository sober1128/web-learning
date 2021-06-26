// https://leetcode-cn.com/problems/compress-string-lcci/

var compressString = function(S) {
  if(!S) return S;    // 空串
  let str = '';
  let ch = S[0], count = 1;
  for(let i = 1; i < S.length; i++) {
    if(ch === S[i]) count++;
    else {
      str += ch + count.toString()
      ch = S[i];
      count = 1
    }
  }
  str += ch + count.toString()
  return str.length >= S.length ? S : str;
};

var compressString = function(S) {    // 类似双指针
  let res = '', i = j = 0;
  while(j < S.length) {
    if(S[j] !== S[j+1]) {
      res += S[i] + (j-i+1)
      i = j+1
    }
    j++
  }
  return res.length < S.length ? res : S
}