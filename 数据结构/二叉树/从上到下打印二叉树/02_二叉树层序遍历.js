/*
二叉树：[3,9,20,null,null,15,7],
层序遍历结果:  [ [3],[9,20],[15,7] ]
*/
//  BFS
var levelOrder = function(root) {
  if(!root) return [];    //空节点判断
  let level = 0;
  const queue = [root], res = [];
  while(queue.length) {
    res[level] = [];
    let levelNum = queue.length;    // 每一层的节点个数
    while(levelNum--) {
      const node = queue.shift();
      res[level].push(node.val);
      node.left && queue.push(root.left);
      node.right && queue.push(root.right);
    }
    level++;
  }
  return res;
}


// DFS
var levelOrder = function(root) {
  if(!root) return [];
  const res = [];
  dfs(root, 0, res);
  return res;
}

function dfs(root, level, res) {
  if(root) {
    if(!res[level]) res[level] = [];
    res[level].push(root.val);
    dfs(root.left, level+1, res);
    dfs(root.right, level+1, res);
  }
}