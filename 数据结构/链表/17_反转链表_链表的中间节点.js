// 题1 ： 反转链表
var reverseList = function(head) {
  let pre = null, cur = head;
  while(cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return pre;
}

//  题2 ： 链表的中间节点
var middleNode = function(head) {
  let fast = head, slow = head;
  while(fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};