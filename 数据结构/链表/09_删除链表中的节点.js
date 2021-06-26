/* 删除链表中的节点
给定单链表的头指针和要删除的指针节点，在O(1)时间内删除该节点。

1.删除的节点不是尾部节点 - 将next节点覆盖当前节点
2.删除的节点是尾部节点且等于头节点，只剩一个节点 - 将头节点置为null
3.删除的节点是尾节点且前面还有节点 - 遍历到末尾的前一个节点删除-----!!!
只有第三种情况时间复杂度是O(n)，且这种情况只会出现1/n次，所以算法时间复杂度是O(1)  */

const deleteNode = (head, node) => {
  if(node.next) {
    node.val = node.next.val
    node.next = node.next.next
  } else if (node === head) {
    node = null
    head = null
  } else {
    node = head
    while(node.next.next) {
      node = node.next
    }
    node.next = null
    node = null   // 为什么这里node也要设置为null---将要删除的这个节点释放？？不理解
  }
  return node
}