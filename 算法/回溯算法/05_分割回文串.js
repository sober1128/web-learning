// 131 ---给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

var partition = function(s) {
  // 本题涉及到两个关键问题：
  // 1.切割问题，有不同的切割方式
  // 2.判断回文
  const res = [];
  const dfs = (index, list) => {
    if(index >= s.length) {  // 如果起始位置已经大于s的大小，说明已经找到了一组分割方案了
      res.push([...list]);
      return;
    }

    for(let i = index; i<s.length; i++) {
      if(isPalondrome(index, i)) {    // 是回文子串
        let str = s.substr(index, i-index+1);   // 截取此段字符串
        // let str = s.slice(index, i+1);
        list.push(str);
      } else {
        continue;
      }
      dfs(i+1, list);   // 寻找i+1为起始位置的子串
      list.pop();   // 回溯过程，弹出本次已经填在的子串
    }
  }
  
  function isPalondrome(start, end) {
    let i = start, j = end;
    while(i < j) {
      if(s[i] != s[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  }

  dfs(0, []);
  return res;
};