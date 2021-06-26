function IsBalanced_Solution(root) {
  return banlanced(root) != -1
}

function banlanced(root) {
  if(!root) return 0
  const left = banlanced(root.left)
  const right = banlanced(root.right)
  if(left == -1 || right == -1 || Math.abs(left - right) > 1) {
    return -1
  }
  return Math.max(left, right) + 1
}


// 后序遍历  ---左右根---  在遍历某节点的左、右节点之后，可以根据它的左、右节点的深度判断它是不是平衡的，并得到当前深度
var isBalanced = function(root) {
  var Banlanced = (root) => {
    if(!root) return 0
    const left = Banlanced(root.left)
    const right = Banlanced(root.right)
    if(left == -1 || right == -1 || Math.abs(left-right) > 1){
      return -1
    }
    return Math.max(left, right) + 1
  }
  
  return Banlanced(root) != -1
}

var isBalanced = function(root) {
  var Balanced = (root) => {
    if(!root) return 0
    const left = Balanced(root.left)
    if(left == -1) return -1    //如果左子树不满足 直接返回 不用再判断右子数
    const right = Balanced(root.right)
    if(right == -1 || Math.abs(left-right) > 1) return -1
    return Math.max(left, right) + 1    //记得+1  加上当前层数
  }
  return Balanced(root) !== -1
}