// 30题 -- https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/solution/js-bao-li-qiu-jie-yu-hua-dong-chuang-kou-jie-fa-ji/
var findSubstring = function(s, words) {
  if(!words || !words.length) return [];
  let wordLen = words[0].length;
  let allWordsLen = wordLen * words.length;
  let ans = [], wordMap = {};
  for(let w of words) {
    wordMap[w] ? wordMap[w]++ : wordMap[w] = 1;
    // 1.用map以键值对的来储存words
  }
  for(let i = 0; i < s.length; i++) {
    let wn = Object.assign({}, wordMap);
    for(let j = i; j < i+allWordsLen-wordLen+1; j++) {
      let w = s.slice(j, j+wordLen);
      //2.循环字符串s，然后每次从字符串s中截取一段长度为 words 单词总长的字符串，然后按照单个words单词的长度，对其进行拆分成单词
      if(wm[w]) {
        wm[w]--;    // 3.拆分单词查询
      } else {
        break;
      }
    }
    if(Object.values(wm).every(n => n === 0)) ans.push(i);
    // 4. 内层循环结束后，如果map所有的 value 都为0，则表明当前子字符串符合要求，将其起始索引放入结果集中
  }
  return ans;
}
// 时间复杂度：O(KN)
// N 为 s 的长度，K 为 words 一个单词的长度

// 空间复杂度：O(N + M)
// N 为 s 的长度，M 为 words 的长度

