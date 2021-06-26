//  BFS
var levelOrder = function(root) {
  if(!root) return [];    //空节点判断
  let level = 0;
  const queue = [root], res = [];
  while(queue.length) {
    res[level] = [];
    let levelNum = queue.length;    // 每一层的节点个数
    while(levelNum--) {
      const node = queue.shift();
      res[level].push(node.val);
      node.left && queue.push(root.left);
      node.right && queue.push(root.right);
    }
    if(level &1 === 1) {      //判断层数，单数层进行翻转--------------
      res[level].reverse();
    }
    level++;
  }
  return res;
}


var zigzagLevelOrder = function(root) {
  if(!root) return [];    //空节点判断
  let level = 0;
  let queue = [root], res = [];
  while(queue.length) {
    res[level] = [];
    let levelNum = queue.length;    // 每一层的节点个数
    while(levelNum--) {
      const node = queue.shift();
      if(level & 1 == 1) {
        res[level].unshift(node.val);   // 插入数组的时候判断层数----------
      } else {
        res[level].push(node.val);
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
    level++;
  }
  return res;
};
