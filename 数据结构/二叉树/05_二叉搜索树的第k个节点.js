// 二叉搜索树的中序遍历即排序后的节点，本题实际考察二叉树的遍历。
function kthNode(root, k) {
  const res = []
  const inorder = (root) => {
    if(root) {
      inorder(root.left)
      res.push(root.val)
      inorder(root.right)
    }
  }
  inorder(root);
  if(k > 0 && k <= res.length){
    return res[k-1]
  }
  return null
}

function kthNode(root, k) {
  const res = []
  const stack = []
  let current = root
  while(stack.length ||current) {
    while(current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    res.push(current)
    current = current.right
  }
  if(k > 0 && k <= res.length){
    return res[k-1]
  }
  return null
}