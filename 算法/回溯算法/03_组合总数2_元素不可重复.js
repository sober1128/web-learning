// 40题---https://leetcode-cn.com/problems/combination-sum-ii/solution/man-tan-wo-li-jie-de-hui-su-chang-wen-shou-hua-tu-/

// 说明
// 所有数字（包括 target）都是正整数。
// 解集不能包含重复的组合。 

// 输入: candidates = [2,5,2,1,2], target = 5,
// 所求解集为:
// [
//   [1,2,2],
//   [5]
// ]

const combinationSum = (candidates, target) => {
  candidates.sort((a,b) => a-b);  //---------先排序-------------
  const res = [];
  const dfs = (index, temp, sum) => { //index是当前选择的起点索引，temp是当前的集合，sum是当前求和的值
    if(sum >= target) {
      if(sum == target) {
        // res.push(temp.slice());   //temp的拷贝，加入解集--slice()方法不改变原数组
        res.push([...temp])
      }
      return
    }
    for(let i = index; i < candidates.length; i++) {  // 枚举当前可选的所有数，从index开始
      //-------------- 当前选项和左邻选项一样，跳过---------------
      if(i-1 >= index && candidates[i-1] == candidates[i]){
        continue;
      }
      temp.push(candidates[i]); // 选这个数
      dfs(i+1, temp, sum + candidates[i]);  // ------i+1----基于此选择继续，传i，下一次就不会选择到i左边的数
      temp.pop(); //撤销选择，回到选择candidates[i]之前的状态，继续尝试同层右边的数
    }
    dfs(0, [], 0);
    return res;
  }
}