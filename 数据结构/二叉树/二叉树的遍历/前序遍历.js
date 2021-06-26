var preorderTraversal = function(root){
  let res = []
  const dfs = (root, res) => {
    if(root) {
      res.push(root.val);
      dfs(root.left, res);
      dfs(root.right, res);
    }
  }
  dfs(root, res)
}

/*
  取跟节点为目标节点，开始遍历
    1.访问目标节点
    2.左孩子入栈 -> 直至左孩子为空的节点
    3.节点出栈，以右孩子为目标节点，再依次执行1、2、3
*/
var preorderTraversal = function(root) {
  let res = []
  let stack = []
  let cur = root
  while(cur || stack) {
    while(cur) {
      res.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    cur = cur.right
  }
  return res
}