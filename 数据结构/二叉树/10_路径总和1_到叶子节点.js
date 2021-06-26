//  dfs
var hasPathSum = function(root, targetSum) {
  if(root == null) return false;
  if(root.left == null && root.right == null) {   // 一定要判断是否是叶子节点---左右子树同时为空
    return targetSum == root.val;
  }
  targetSum = targetSum - root.val;
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
}

var hasPathSum = function(root, targetSum) {
  if(root == null) return false;
  let res = false;
  const dfs = (root,sum) => {
    if(root.left == null && root.right == null && targetSum == sum) res = true;
    root.left && dfs(root.left, sum + root.ledt.val);
    root.right && dfs(root.right, sum + root.right.val);
  }
  dfs(root, root.val);
  return res;
}

var hasPathSum = function(root, targetSum)  {
  if(!root) return false;
  const stack = [[root, root.val]];
  while(stack.length) {
    let [node, sum] = stack.shift();
    if(node.left == null && node.right == null && sum == targetSum) {
      return true
    }
    node.left && stack.push([node.left, sum + node.left.val]);
    node.right && stack.push([node.right, sum + node.right.val]);
  }
  return false;
}

// BFS   
var hasPathSum = function(root, targetSum) {
  if(root == null) return false;
  let stack = [root];
  let sumStack = [targetSum - root.val];
  while(stack.length > 0) {
    let node = stack.pop();
    let curSum = sumStack.pop();
    if(root.left === null && root.right === null && curSum == 0) {
      return true;
    }
    if(node.left !== null) {
      stack.push(node.left);
      sumStack.push(curSum - node.left.val);
    }
    if(node.right !== null) {
      stack.push(node.right);
      sumStack.push(curSum - node.right.val);
    }
  }
  return false;
} 


