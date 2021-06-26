// 交换
var permutation = function(s) {
  if(!s) return [];
  if(s.length == 1) return [s];

  const res = [];
  const list = s.split('');
  permutationCore(list, 0);
  return res;

  function permutationCore(list, index) {
    if(index === list.length) {
      res.push(list.join(''));
    } else {
      let set = new Set();
       for(let i = index; i < s.length; i++) {
         if(set.has(list[i])) continue;
         set.add(list[i]);

         let temp = list[index];
         list[index] = list[i];
         list[i] = index;   // 交换

         permutationCore(list, index+1);

         temp = list[index];
         list[index] = list[i];
         list[i] = index;    // 换回来
       }
    }
  }
}


// 而对于去重通常有两种方式：

// 1.使用 Set 实现去重；
// 2.先对原字符串进行排序，然后确保相同字符传入同一目标位置的动作只发生一次。
var permutation = function(s) {
  const res = new Set();
  const visited = {};   // 缓存已经用过的字符索引
  function dfs(path) {
    if(path.length === s.length) {
      return res.add(path);
    }
    for(let i = 0; i < s.length; i++) {
      if(visited[i]) continue;
      visited[i] = true;
      dfs(path + s[i]);
      visited[i] = false;
    }
  }
  dfs('');
  return [...res];
}

var permutation = function(s) {
  // const res = new Set();
  const arr = Array.from(s).sort();   // 排序
  const res = [];
  const visited = {};
  const dfs = (path) => {
    if(path.length == s.length) {
      res.push(path);
      // res.add(path);
    }
    for(let i = 0; i < s.length; i++) {
      if(visited[i] || (i>0 && !visited[i-1] && arr[i]==arr[i-1])) continue;
      // if(visited[i]) continue;
      visited[i] = true;
      // dfs(path+s[i]);
      dfs(path+arr[i])
      visited[i] = false;
    }
  }
  dfs('');
  // console.log(res);
  // return res;
  return [...res];
};
