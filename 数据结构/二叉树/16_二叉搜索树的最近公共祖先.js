/*利用二叉搜索树的特点
首先判断 p 和 q 是否相等，若相等，则直接返回 p 或 q 中的任意一个，程序结束

若不相等，则判断 p 和 q 在向左还是向右的问题上，是否达成了一致
如果 p 和 q 都小于root, 哥俩一致认为向左👈，则 root = root.left
如果 p 和 q 都大于root, 哥俩一致认为向右👉，则 root = root.right
如果 p 和 q 哥俩对下一步的路线出现了分歧，说明 p 和 q 在当前的节点上就要分道扬镳了，当前的 root 是哥俩临别前一起走的最后一站
返回当前 root
程序结束
*/

//  递归
var lowestCommonAncestor = function(root, p, q) {
  // 如果有一个是根节点，则根节点是
  if(!root || root == p || root ==q) return root;
  // 如果都不是根节点，则判断在左子树还是右子数
  if(root.val > p.val && root.val > q.val) {
    return lowestCommonAncestor(root.left, p, q)
  } else if(root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
};

//迭代
var lowestCommonAncestor = function (root, p, q) {
  if(!root) return null;
  if(p.val === q.val) return q;
  while(root) {
    if(root.val > p.val && root.val > q.val) {
      root = root.left
    }
    if(root.val < p.val && root.val < q.val) {
      root = root.right
    } else {
      return root
    }
  }
}