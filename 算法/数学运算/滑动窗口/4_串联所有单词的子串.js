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

var findSubstring = function(s, words) {
  const wordSize = words[0].length;
  const allLen = wordSize * words.length;

  const wordsMap = {};
  words.forEach(w => {
    wordsMap[w] = ((wordsMap[w] || 0) + 1);
  });

  const res = [];
  for(let i = 0; i <= s.length-allLen; i++) {
    const tempCount = {...wordsMap};
    let count = words.length;
    for(let j = i; j < i+allLen; j+=wordSize) {
      const word = s.slice(j, j+wordSize);
      if(!(tempCount.has(word)) || tempCount[word] <= 0) {
        break;
      }
      tempCount[word]--;
      count--;
    }
    if(count === 0) res.push(i);
  }
  return res;
}

//----------滑动窗口----------
var findSubstring = function(s, words) {
  if(!s || !words ||!words.length) return [];
  // key是单词，value是出现的次数
  let wordsMap = new Map();
  for(let w of words) {
    wordsMap.set(w, (wordsMap.get(w) || 0) +1);
  }

  // 一个单词的长度
  let oneWordLen = words[0].length;
  // 所有单词的长度
  let allWordsLen = oneWordLen * words.length;
  if(s.length < allWordsLen) return [];

  let res = [];
  for(let i = 0 ; i < oneWordLen; i++) {
    let left = i, right = i;
    // 符合要求的单词数
    let count = 0;
    // 符合要求的word窗口
    let tmpMap = new Map();

    // 有窗口不超出s的长度，每次移动一格单词的长度
    while(right+oneWordLen <= s.length) {
      const word = s.substring(right, right+oneWordLen);
      right += oneWordLen;  // 右窗口右移

      // words中没有这个单词，则左指针移动，缩小窗口，直接右移到这个单词的后面
      if (!wordsMap.has(word)) {
        // 左指针直接移动到右窗口的位置，包含该不符合字符的串都直接跳过
        left = right;
        // 窗口内单词统计map清空，重新统计
        tmpMap.clear();
        // 符合要求的单词数清零
        count = 0;
      } else {
        // 统计当前字串中这个单词出现的次数
        tmpMap.set(word, (tmpMap.get(word) || 0) + 1);
        count++;
      }
      while(tmpMap.get(word) > wordsMap.get(word)) {
        let tmpWord = s.substring(left, left+oneWordLen);
        count--;
        tmpMap.set(tmpWord, (tmpMap.get(tmpWord) || 0) - 1);
        left += oneWordLen;
      }
      // 当前窗口字符串个数满足要求，此时窗口的单词行号满足words
      if(count == words.length) {
        res.push(left);
      }
    }
  }
  // 返回能拆分成words的所有起始索引
  return res;
}

// 时间复杂度是 O（n），n是s的长度
// 空间复杂度是 O（m），m是words的单词数

var findSubstring = function(s, words) {
  if(!s || !words || !words.length) return [];
  let wordsMap = {};
  for(const w of words) {
    wordsMap[w] ? wordsMap[w]++ : wordsMap[w]=1;
  }
  let oneWordLen = words[0].length;
  let allWordLen = oneWordLen * words.length;
  if(s.length < allWordLen) return [];

  let res = [];
  for(let i = 0; i < oneWordLen; i++) {
    let left = i, right = i, count = 0;
    let tmpMap = {};
    while(right+oneWordLen <= s.length) {
      const word = s.slice(right, right+oneWordLen);
      right += oneWordLen;    // 右窗口右移
      if(!wordsMap[word]) {
        left = right;
        tmpMap = {};
        count = 0;
        // continue;
      } else {
        tmpMap[word] ? tmpMap[word]++ : tmpMap[word]=1;
        count++;
      }
      while(tmpMap[word] > wordsMap[word]) {
        let tmpWord = s.slice(left, left+oneWordLen);
        count--;
        tmpMap[tmpWord] ? tmpMap[tmpWord]-- : tmpMap[tmpWord]=-1;

        left += oneWordLen;
      }
      if(count == words.length) res.push(left);
    }
  }
  return res;
}