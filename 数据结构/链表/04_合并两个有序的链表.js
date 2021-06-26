// 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。

function Merge(l1, l2) {
  if(!l1 && !l2) return null;
  if(!l1) return l2;
  if(!l2) return l1;
  let head;
  if(l1.val < l2.val){
    head = l1
    head.next = Merge(l1.next, l2)
  } else {
    head = l2
    head.next = Merge(l1,l2.next)
  }
  return head
}


function Merge(l1, l2) {
  const dummy = new ListNode(0);
  let pre = dummy;
  while(l1 && l2) {
    if(l1.val < l2.val) {
      pre.next = l1;
      l1 = l1.next; 
    } else {
      pre.next = l2;
      l2 = l2.next;
    }
    pre = pre.next;
  }
  if(l1) pre.next = l1;
  if(l2) pre.next = l2;
  return dummy.next;
}
