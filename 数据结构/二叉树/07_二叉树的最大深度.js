// 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。

// 思路
// 深度优先遍历 + 分治
// 一棵二叉树的最大深度等于左子树深度和右子树最大深度的最大值 + 1

function MaxDepth(root) {
  // return !root ? 0 : Math.max(TreeDepth(root.left), TreeDepth(root.right)) + 1
  if(!root) return 0
  let leftDepth = MaxDepth(root.left)
  let rightDepth = MaxDepth(root.right)
  return Math.max(leftDepth, rightDepth) + 1
}
function MaxDepth(root) {
  let depth = 0;
  function dfs(root, level) {
    if(!root) return;
    level++;
    depth = Math.max(root.left, level);
    depth = Math.max(root.right, level);
  }
  dfs(root, 0);
  return depth;
}


// 方法二：层序遍历（BFS）
// 树的层序遍历 / 广度优先搜索往往利用 队列 实现。
// 关键点： 每遍历一层，则计数器 +1+1 ，直到遍历完成，则可得到树的深度。

function TreeDepth(root) {
  if(!root) return 0;
  let level = 0, res = []
  let queue = [[root,level]]
  while(queue.length) {
    let [node,level] = queue.shift()
    if(!res[level]) res[level] = []
    res[level].push(node)     // 把那个节点放进去  输入：[3,9,20,null,null,15,7]   
    //res = [ [ [3,9,20,null,null,15,7] ], [ [9], [20,15,7] ], [ [15], [7] ] ]

    node.left && queue.push([node.left, level+1])
    node.right && queue.push([node.right, level+1])
  }
  return res.length
}

function TreeDepth(root) {
  if(!root) return 0;
  const queue = [root];
  let depth = 1;
  while(queue.length) {
    const levelNum = queue.length;  // 当前层的节点数
    while(levelNum--) {
      const node = queue.shift();   // 当前节点出列
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    // 当前层的所有节点已经全部出列了，如果队列不为空，说明右下一层节点， depth+1
    if(queue.length) depth++;
  }
  return depth;
}