// https://leetcode-cn.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solution/chuan-lian-zi-fu-chuan-de-zui-da-chang-d-g6gk/
// 回溯 + 位运算
// 用一个二进制数来表示该字符串的字符集合，二进制的第 i 位为 1 表示字符集合中含有第 i 个小写字母，为 0 表示字符集合中不含有第 i 个小写字母。

var maxLength = function(arr) {
  let ans = 0;
  const masks = [];
  for(const s of arr) {
    let mask = 0;
    for(let i = 0; i < s.length; i++) {
      const ch = s[i].charCodeAt() - 'a'.charCodeAt();
      if(((mask >> ch) & 1) !== 0) {    // 若 mask 已有 ch，则说明 s 含有重复字母，无法构成可行解
        mask = 0;
        break;
      }
      mask = mask | (1 << ch);    // 将 ch 加入 mask 中
    }
    if(mask > 0) {
      masks.push(mask);
    }
  }

  const backtrack = (masks, pos, mask) => {
    if(pos === masks.length) {
      ans = Math.max(ans, mask.toString(2).split('0').join('').length);
      // toString(2)转换成二进制字符串
      return;
    }
    if((mask & mask[pos]) === 0) {     // mask 和 masks[pos] 无公共元素
      backtrack(masks, pos+1, mask|masks[pos]);   // 选择
    } 
    backtrack(masks, pos+1, mask);    // 不选
  }

  backtrack(masks, 0, 0);
  return ans;
}

// 迭代 + 位运算
