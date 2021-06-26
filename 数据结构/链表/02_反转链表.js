// 1.指针法
var reverseList = function(head) {
  if(head == null || head.next == null) return head;
  let cur = head, pre = null
  while(cur) {
    let last = cur.next   //先把断裂节点存起来
    cur.next = pre
    pre = cur
    cur = last
    }
}

//2.递归法
/*  使用递归函数，一直递归到最后一个节点，该节点就是反转后的头结点，记为rev
    此后，每次函数在返回的过程中，让当前节点的下一个节点的next指针指前节点
    同时让当前节点的next指针指向null
    当递归全部出栈之后，链表反转完成
*/
var reverseList = function(head) {
  if(head == null || head.next == null) return head   //出口
  let rev = reverseList(head.next)
  head.next.next = head
  head.next = null
  return rev
}