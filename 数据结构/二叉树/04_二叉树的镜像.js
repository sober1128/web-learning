// 递归交换二叉树所有节点
function Mirror(root) {
  if(root) {
    const temp = root.left
    root.left = root.right
    root.right = temp
    Mirror(root.left)
    Mirror(root.right)
  }
}

var mirrorTree = function(root){
  if(root) {
    let stack = [root]
    while(stack.length) {
      let node = stack.pop()
      let temp = node.left
      node.left = node.right
      node.right = temp

      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
  }
  return root
}