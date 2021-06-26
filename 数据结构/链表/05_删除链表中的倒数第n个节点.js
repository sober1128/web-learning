// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点

var removeNthFromEnd = function(head, n) {
  let curHead = new ListNode(0);
  curHead.next = head;
  let fast = curHead, slow = curHead;
  while(n--) {
    fast = fast.next;   // 先走n步
  }
  fast = fast.next;   // 再走一步
  while(fast) {
    fast = fast.next;
    slow = slow.next;   // 此时slow为倒数n+1个节点
  }
  slow.next = slow.next.next;
  return curHead.next;
};



// 1.递归
    // if(l1 == null) return l2;
    // if(l2 == null) return l1;
    // if(l1.val < l2.val){
    //     l1.next = mergeTwoLists(l1.next, l2);
    //     return l1;
    // } else {
    //     l2.next = mergeTwoLists(l1, l2.next);
    //     return l2;
    // }

    // 2.迭代
    const head = new ListNode(-1);
    let pre = head;
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            pre.next = l1;
            l1 = l1.next;
            pre = pre.next;
        } else {
            pre.next = l2;
            l2 = l2.next;
            pre = pre.next;
        }
    }
    pre.next = l1 == null ? l2 : l1;
    return head.next; 