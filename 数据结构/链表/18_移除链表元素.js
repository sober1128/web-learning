// https://leetcode-cn.com/problems/remove-linked-list-elements/solution/jstu-jie-hao-li-jie-by-ignore_express/

var removeElements = function(head, val) {
  let newHead = new ListNode(null);   //哑节点
  let pre = newHead, cur = head;
  newHead.next = head;
  while(cur) {
    if(cur.val == val) {
      pre.next = cur.next;
      cur = pre.next;
    } else {
      pre = cur;
      cur = cur.next;
    }
  }
  return newHead.next;
};


var removeElements = function(head, val) {
  let newHead = new ListNode(0);    // 哑节点
  newHead.next = head;
  let cur = newHead;
  while(cur.next) {
    if(cur.next.val == val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return newHead.next
};