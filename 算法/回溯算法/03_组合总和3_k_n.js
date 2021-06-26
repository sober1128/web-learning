// 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。 https://leetcode-cn.com/problems/combination-sum-iii/

// 说明：    216题
// 所有数字都是正整数。
// 解集不能包含重复的组合。 

var combinationSum3 = function(k, n) {
  const res = [];

  // 基于当前已选的list数组(和为sum)，在数start到数9中继续选
  const dfs = (start, sum, list) => {
    if(list.length == k) {  //选够k个，结束递归
      if(sum == n) {        //组合中数之和等于n
        res.push([...list]) //加入解集
      }
      return
    }

    for(let i = start; i <= 9; i++) { // 枚举出所有选择
      list.push(i);   // 做出一个选择i
      dfs(i+1, sum+i, list);    //基于该选择i， 往下递归

      list.pop();   // 撤销这个选择
    }
  }

  dfs(1, 0, []);    // 入口
  return res;
};

console.log(combinationSum3(3,9));