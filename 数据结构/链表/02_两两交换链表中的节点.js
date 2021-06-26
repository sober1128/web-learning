// 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
// 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。


// 递归
var swapPairs = function(head) {
  if(head == null || head.next == null) {
    return head;
  }
  const newHead = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;
  return newHead;
}

// 迭代
var swapPairs = function(head) {
  const newHead = new ListNode(0);
  newHead.next = head;
  let cur = newHead;
  while(cur.next && cur.next.next) {
    const node1 = cur.next;
    const node2 = cur.next.next;
    cur.next = node2;
    node1.next = node2.next;
    node2.next = node1;
    cur = node1;
  }
  return newHead.next;
}