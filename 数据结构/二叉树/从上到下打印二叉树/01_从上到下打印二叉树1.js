var levelOrder = function(root) {
  if(!root) return [];
  const queue = [root], res = [];
  while(queue.length) {
    const node = queue.shift();
    res.push(node.val);
    node.left && queue.push(node.left);
    node.right && queue.push(node.right);
  }
  return res;
}

