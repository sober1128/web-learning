// 输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

/*
二叉搜索树的中序遍历即排序后的序列
  1.递归左子树，找到左子树的最后一个节点，根节点左侧连接到左子树的最后一个节点
  2.当前节点变为已经转换完成的链表的最后一个节点
  3.递归右子树，找到当前树的最后一个节点
  4.回溯到上一层，进行链接...
*/

function Convert(root) {
  if(!root) return null;
  let head = null
  let pre = head;
  dfs(root);
  return head;
}

function dfs(cur) {
  if(!cur) return;  // 递归出口
  dfs(cur.left);  // 遍历左子树,递归到最左节点

  // 处理当前节点
  if(!pre) {
    head = cur  //遍历到最左边节点，此时节点就是双向链表的head节点
  } else {
    pre.right = cur
  }

  cur.left = pre
  pre = cur

  // 遍历右子树
  dfs(cur.right)
}