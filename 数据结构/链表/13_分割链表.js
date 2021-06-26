// 1983
// 维护两个链表 small 和 large.small 链表按顺序存储所有小于 x 的节点，large 链表按顺序存储所有大于等于 x 的节点。遍历完原链表后，我们只要将 small 链表尾节点指向 large 链表的头节点即能完成对链表的分割。


var partition = function(head, x) {
  var partition = function(head, x) {
    let smallHead = new ListNode(0);
    let largeHead = new ListNode(0);
    let small = smallHead;
    let large = largeHead;
    let cur = head;
    while(cur) {
      if(cur.val < x) {
        small.next = cur;
        small = small.next;
      } else {
        large.next = cur;
        large = large.next
      }
      cur = cur.next;
    }
    large.next = null;    //Error - Found cycle in the ListNode
    small.next = largeHead.next;
    return smallHead.next;
  };
}
// [1,4,3,2,5,2]
// 3   输出   [1,2,2,4,3,5]
// console.log(smallHead);        [0,1,2,2]  
// console.log(largeHead);        [0,4,3,5,2]