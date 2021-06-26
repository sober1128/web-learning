var inorderTraversal = function(root) {
  let res = []
  const dfs = (root, res) => {
    if(root) {
      dfs(root.left, res);
      res.push(root.val);
      dfs(root.right, res);

    }
  }
  dfs(root, res)
  return res
}

/*
  取跟节点为目标节点，开始遍历
    1.左孩子入栈 -> 直至左孩子为空的节点
    2.节点出栈 -> 访问该节点
    3.以右孩子为目标节点，再依次执行1、2、3
*/
var inorderTraversal = function(root) {
  const res = []
  const stack = []
  let cur = root
  while(cur || stack.length > 0) {
    while(cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res
}