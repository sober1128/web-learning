// 83题  
// 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
// 返回同样按升序排列的结果链表。

var deleteDuplicates = function(head) {
  if(!head || !head.next) return head;
  let cur = head;
  while(cur.next) {
    if(cur.next.val === cur.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head;
}