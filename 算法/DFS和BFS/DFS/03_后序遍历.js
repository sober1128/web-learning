const postorderTraversal = (root) => {
  const res = []
  const postorderTraversalNode = (root) => {
    if(root) {
      postorderTraversal(root.left)
      postorderTraversal(root.right)
      res.push(root.val)
    }
  }
  postorderTraversalNode(root)
  return res;
}

const postorderTraversal = (root) => {
  const res = []
  const stack = []
  let last = null // 标记上一个访问的节点
  let current = root
  while(current || stack.length) {
    while(current){
      stack.push(current)
      current = current.left
    }
    current = stack[stack.length - 1]
    if(!current.right || current.right == last) {  //没有右子树或刚访问过右子树
      current = stack.pop()
      res.push(current.val)
      last = current
      current = null
    } else {  //有右子树并且没有访问
      current = current.right // 继续弹栈
    }
  }
  return res;
}

const postorderTraversal = (root) => {
  const stack = []
  let res = []
  if(root) stack.push(root)
  while(stack.length) {
    root = stack.pop()
    if(root) {
      stack.push(root)
      if(root) {
        stack.push(root)
        stack.push(null)
        root.right && stack.push(root.right)
        root.left && stack.push(root.left)
      } else {
        res.push(stack.pop().val)
      }
    }
    return res;
  }
} 

// https://leetcode-cn.com/problems/binary-tree-postorder-traversal/solution/dan-ke-xi-lie-er-cha-shu-de-hou-xu-bian-li-by-lvsh/