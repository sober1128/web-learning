const letterCombinations = (digits) => {
  if (digits.length == 0) return [];
  const res = [];
  const map = { 
    '2': 'abc', 
    '3': 'def', 
    '4': 'ghi', 
    '5': 'jkl', 
    '6': 'mno', 
    '7': 'pqrs', 
    '8': 'tuv', 
    '9': 'wxyz' };
  // dfs: 当前构建的字符串为curStr，现在“翻译”到第i个数字，基于此继续“翻译”
  const dfs = (curStr, index) => {
    if(index == digits.length) {
      res.push(curStr);
      return;
    }
    const str = map.get(digits[i]);
    for(const ch of str) {
      dfs(curStr+ch, index+1);
    }
  }
  dfs('', 0);
  return res;
}