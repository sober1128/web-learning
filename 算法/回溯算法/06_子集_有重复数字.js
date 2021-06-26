var subsets = (nums) => {
  nums.sort((a,b) => a-b);  // 升序排序
  const res = [];
  let visited = {}

  const dfs = (index, list) => {
    res.push([...list]);
    for(let i = index; i < nums.length; i++) {
      if(visited[i] || (i-1 >= 0 && !visited[i-1] && nums[i-1] == nums[i]))  continue;
      // 如果这个值已经被选过  or  同一层的前一个相同，但没有被选过
      visited[i] = true;
      list.push(nums[i]);
      dfs(i+1, list);

      visited[i] = false;
      list.pop()
    }
  }
  dfs(0, []);
  return res;
}

const nums = [1,2,2]
console.log(subsets(nums))