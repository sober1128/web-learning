/*   深度优先搜索
  时间复杂度：O(n)，其中 nn 是二叉搜索树的节点数。
  空间复杂度：O(n)。空间复杂度主要取决于栈空间的开销。
*/

var rangeSumBST = function(root, low, high) {
  if(!root) return 0;
  if(root.val > high) return rangeSumBST(root.left, low,high)
  if(root.val < low) return rangeSumBST(root.right, low, high)
  return root.val + rangeSumBST(root.left, low,high) + rangeSumBST(root.right, low, high);
}

/*   广度优先搜索  时间复杂度：O(n); 空间复杂度：O(n)
    用一个队列 qq 存储需要计算的节点。每次取出队首节点时，若节点为空则跳过该节点，否则按方法一中给出的大小关系来决定加入队列的子节点。
*/
var rangeSumBST = function(root, low, high) {
  let sum = 0;
  const queue = [root]
  while(queue.length) {
    const node = queue.shift();
    if(!node) continue;
    if(node.val > high) {
      queue.push(node.left);
    } else if(node.val < low) {
      queue.push(node.right);
    } else {
      sum += node.val;
      queue.push(node.left);
      queue.push(node.right);
    }
  }
  return sum;
}