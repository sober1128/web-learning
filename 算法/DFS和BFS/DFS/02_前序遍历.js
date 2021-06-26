// const preOrderTraversal = (root) => {
//   const res = []
//   const preOrderTraversalNode = (node) => {
//     if(node) {
//       res.push(node.val)
//       preOrderTraversalNode(node.left)
//       preOrderTraversalNode(node.right)
//     }
//   }
//   preOrderTraversalNode(root)
//   return res;
// }

const preOrderTraversal = (root) => {
  const res = []
  const stack = []

  if(root) stack.push(root)

  while(stack.length) {
    const curNode = stack.pop()
    res.push(curNode.val)
    curNode.right && stack.push(curNode.right)
    curNode.left && stack.push(curNode.left)
  }
  return res;
}

let  root = [10,6,4,8,14,12,16]
console.log(preOrderTraversal(root))