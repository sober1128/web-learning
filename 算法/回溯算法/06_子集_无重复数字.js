// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// var subsets = (nums) => {
//   const res = [];

//   const dfs = (index, list) => {
//     if(index == nums.length) {    // 指针越界
//       res.push([...list])         // 加入解集
//       return                  // 结束当前的递归
//     }

//     list.push(nums[index]);   //选择这个数
//     dfs(index+1, list)      // 基于该选择，继续往下递归，考察下一个数
//     list.pop()              // 上面的递归结束，撤销该选择
//     dfs(index+1, list)      // 不选这个数，继续往下递归，考察下一个数
//   }
//   dfs(0, []);
//   return res;
// }

var subsets = (nums) => {
  const res = [];

  const dfs = (index, list) => {
    res.push([...list]);  // 收集子集\
    if(index >= nums.length) {
      return;   // 终止条件可以不加  fot循环本身也结束了
    }
    for(let i = index; i < nums.length; i++) {
      list.push(nums[i]);
      dfs(i+1, list);
      list.pop()
    }
  }
  dfs(0, []);
  return res;
}

const nums = [1,2,3]
console.log(subsets(nums))