var postorderTraversal = function(root) {
  let res = []
  const dfs = (root, res) => {
    if(root) {
      dfs(root.left, res);
      dfs(root.right, res);
      res.push(root.val);
    }
  }
  dfs(root, res)
  return res
}

/*
  取根节点为，目标节点，开始遍历
  1.左孩子入栈->直到左孩子为空的节点
  2.栈顶节点的右节点为空或者右节点被访问过->节点出栈并访问他，将节点标记为已访问
  3.栈顶节点的右节点不为空且未被访问，以右孩子为目标节点，再循环123
*/
var postorderTraversal = function(root){
  const res = []
  const stack = []
  let last = null  // 标记上一个访问的节点
  let cur = root
  while(cur || stack.length > 0) {
    while(cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack[stack.length - 1] // 栈顶
    if(!cur.right || cur.right == last) { //右节点为空或者右节点被访问过
      cur = stack.pop()
      res.push(cur.val)
      last = cur
      cur = null    //继续弹栈
    } else {
      cur = cur.right   //右节点不为空且未被访问
    }
  }
  return res
} 

var postorderTraversal = function(root) {
  let res = [];
  let stack = [];
  if(root) stack.push(root);
  while(stack.length) {
    let node = stack.pop();
    if(node) {
      stack.push(node);
      stack.push(null);   // 用null做标志位
      root.right && stack.push(root.right);
      root.left && stack.push(root.left);
    } else {
      res.push(stack.pop().val);
    }
  }  
  return res;
}

/*解题思路： 后序遍历与前序遍历不同的是：后序遍历是左右根  而前序遍历是根左右
如果我们把前序遍历的 list.push(node.val) 变更为 list.unshift(node.val) （遍历结果逆序），那么遍历顺序就由 根左右 变更为 右左根
然后我们仅需将 右左根 变更为 左右根 即可完成后序遍
*/
const postorderTraversal = (root) => {
  const list = [];
  const stack = [];

  // 当根节点不为空的时候，将根节点入栈
  if(root) stack.push(root)
  while(stack.length > 0) {
      const node = stack.pop()
      // 根左右=>右左根
      list.unshift(node.val)
      
      // 先进栈左子树后右子树
      // 出栈的顺序就变更为先右后左
      // 右先头插法入list
      // 左再头插法入list
      // 实现右左根=>左右根
      if(node.left !== null) {
          stack.push(node.left)
      }
      if(node.right !== null) {
          stack.push(node.right)
      }
  }
  return list
}
