const inorderTraversal = (root) => {
  if(!root) return null;
  const res = []
  const stack = []
  let current = root
  while(current ||stack.length > 0){
    while(root) {
      stack.push(root);
      current = current.left
    }
    current = stack.pop()
    res.push(current.val)
    current = current.right
  }
  return res;
}

const inorderTraversal = (root) => {
  const res = []
  const inorderTraversalNode = (root) => {
    if(root) {
      inorderTraversalNode(root.left)
      res.push(root.val)
      inorderTraversalNode(root.right)
    }
  }
  inorderTraversalNode(root)
  return res
}

const inorderTraversal = (root) => {
  const res = []
  const stack = []
  let current = root
  while(current || stack.length) {
    while(current){
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    res.push(current.val)
    current = current.right
  }
  return res;
}