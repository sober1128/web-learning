/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  nums.sort((a,b) => a-b);    // 升序排序
  const res = [];
  // const visited = {};
  const visited = new Array(nums.length);

  const dfs = (path) => {
    if(path.length == nums.length) {
      res.push([...path]);
      return;
    }
    
    for(let i = 0; i < nums.length; i++) {
      if(visited[i]) continue;   //---之前的visited[nums[i]]这样不对，因为数组有重复元素，无法进行循环了---

      if(i - 1 >= 0 && nums[i-1] == nums[i] && !visited[i-1]){
        // 同一层的前一个相同，但没有被选过
        continue;
      }

      path.push(nums[i]);
      visited[i] = true;
      dfs(path);

      path.pop();
      visited[i] = false;
    }
  }

  dfs([]);
  return res;
};