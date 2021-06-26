// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。

const permute = (nums) => {
  const res = [];
  let visited = {};

  const dfs = (path) => {
    if(path.length == nums.length){   //个数选够了
      res.push([...path]);    // 拷贝一份path，加入解集
      return  // 结束当前递归分支
    }

    for(const num of nums) {  //for枚举出每个可选的选项
      if(visited[num]) continue;  //使用过，跳过
      path.push(num);         //将当前的数加入path
      visited[num] = true;    //记录一下，使用过了
      dfs(path);              //基于当前你选择的数，继续递归

      path.pop(); // 上一句的递归结束，回溯，将最后选出的数pop出来
      visited[num] = false; // 撤销这个记录
    }

    // for(let i = 0; i < nums.length; i++) {
    //   if(visited[nums[i]]) continue;  //使用过，跳过
    
    //   path.push(nums[i]);         //将当前的数加入path
    //   visited[nums[i]] = true;    //记录一下，使用过了
    //   dfs(path);              //基于当前你选择的数，继续递归

    //   path.pop(); // 上一句的递归结束，回溯，将最后选出的数pop出来
    //   visited[nums[i]] = false; // 撤销这个记录
    // }
  }

  dfs([]);    // 低轨道入口，空path传进去
  return res;
};