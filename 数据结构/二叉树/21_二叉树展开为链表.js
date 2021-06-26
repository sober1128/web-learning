// 1. 展开的顺序其实就是二叉树的先序遍历
var flatten = function(root) {
  const list = [];
  preorderTraversal(root, list);
  const size = list.length;
  for(let i = 1; i < size; i++) {
    const pre = list[i-1], cur = list[i];
    pre.left = null;
    pre.right = cur;
  }
}

function preorderTraversal(root, list) {    // 递归实现
  if(root) {
    list.push(root);
    preorderTraversal(root.left, list);
    preorderTraversal(root.right, list);
  }
}

// 迭代实现
var flatten = function(root) {
  const stack = [], list = [];
  let node = root;
  while(node || stack.length) {
    while(node) {
      stack.push(node);
      list.push(node);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  const size = list.length;
  for(let i = 1; i < size; i++) {
    const pre = list[i-1], cur = list[i];
    pre.left = null;
    pre.right = cur;
  }
}