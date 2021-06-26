// 给定一个二叉树和其中的一个结点，请找出中序遍历顺序的下一个结点并且返回。注意，树中的结点不仅包含左右子结点，同时包含指向父结点的指针。

/*中序遍历的顺序 左 - 根 - 右
所以寻找下一个节点的优先级应该反过来 优先级 右 - 根 - 左

右节点不为空 - 取右节点的最左侧节点
右节点为空 - 如果节点是父亲节的左节点 取父节点
右节点为空 - 如果节点是父亲节的右节点 父节点已经被遍历过，再往上层寻找...
左节点一定在当前节点之前被遍历过

function TreeLinkNode(val) {
  this.val = val
  this.left = null
  this.right = null
  this.next = null
}  */

function GetNode(node) {
  if(!node) return null;
  if(node.right) {
    node = node.right
    while(node.left){
      node = node.left
    }
    return node
  } else {
    while(node) {
      if(!node.next) {
        return null
      } else if (node == node.next.left) {
        return node.left
      }
      node = node.next
    }
    return node
  }
}

