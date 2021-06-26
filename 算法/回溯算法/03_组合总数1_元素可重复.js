// 39题---https://leetcode-cn.com/problems/combination-sum/
// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取。

// 说明
// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 

// 输入：candidates = [2,3,5], target = 8,
// 所求解集为：
// [
//   [2,2,2,2],
//   [2,3,3],
//   [3,5]
// ]

const combinationSum = (candidates, target) => {
  const res = [];
  const dfs = (index, temp, sum) => { //index是当前选择的起点索引，temp是当前的集合，sum是当前求和的值
    if(sum >= target) {
      if(sum == target) {
        // res.push(temp.slice());   //temp的拷贝，加入解集
        res.push([...temp])
      }
      return;
    }
    for(let i = index; i < candidates.length; i++) {  // 枚举当前可选的所有数，从index开始
      temp.push(candidates[i]); // 选这个数
      dfs(i, temp, sum + candidates[i]);  // 基于此选择继续，传i，下一次就不会选择到i左边的数
      temp.pop(); //撤销选择，回到选择candidates[i]之前的状态，继续尝试同层右边的数
    }
    dfs(0, [], 0);
    return res;
  }
}

