// 61 旋转链表  我们可以先将给定的链表连接成环，然后将指定位置断开。
var rotateRight = function(head, k) {
  // 当链表长度不大于1，或者 k 为 n 的倍数时，新链表将与原链表相同，我们无需进行任何处理。
  if(k == 0 || !head || !head.next) return head;
  let n = 1, cur = head;
  while(cur.next) {
    n++;
    cur = cur.next;
  }
  let add = n - n % k;
  if(add == n) return head;
  cur.next = head;  // 环形
  while(add--) {
    cur = cur.next;
  }
  const newHead = cur.next;
  cur.next = null;
   return newHead;
}