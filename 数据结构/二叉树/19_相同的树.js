/*
  给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
  如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
  https://leetcode-cn.com/problems/same-tree/solution/di-gui-he-die-dai-de-xie-fa-by-hyj8/
*/

// dfs 
var isSameTree = function(p, q) {
  if(!p && !q) return true;
  if(!p) return false;
  if(!q) return false;
  if(p.val !== q.val) {
    return false
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};

// bfs
var isSameTree = function(p, q) {
  const queue = [{p, q}]
  while(queue.length) {
    const cur = queue.shift();
    if(cur.p == null && cur.q == null) continue;    //继续！
    if(cur.p == null || cur.q == null) return false;
    if(cur.p.val != cur.q.val) return false;
    queue.push({
      p: cur.p.left,
      q: cur.q.left
    },{
      p: cur.p.right,
      q: cur.q.right
    }
    )
  }
  return true;
}