//  方法1---哈希表  时间复杂度：O(N)  空间复杂度：O(N)---哈希表的空间，存放链表的节点数
var detectCycle = function(head) {
  let set = new Set();
  while(head) {
    if(set.has(head)) {
      return head;
    }
    set.add(head);
    head = head.next;
  }
  return null;
}

/*
https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/linked-list-cycle-ii-kuai-man-zhi-zhen-shuang-zhi-/
设链表共有 a+b 个节点，其中链表头部到链表入口有 a 个节点（不计链表入口节点）链表环有 b 个节点
  1.fast 走的步数是slow步数的 2 倍，即 f = 2s
  2.fast 比 slow多走了 n 个环的长度，即 f = s + nb
  
  第一次相遇时，快指针一定比慢指针多走 n 个环的长度，即 nb ，因此有 f = s + nb
  走a+nb步一定是在环入口,第一次相遇时慢指针已经走了 [nb] 步
  第二次相遇， cur走a步时，slow走 a+nb 步。两指针重合，并同时指向链表环入口
*/
var detectCycle = function(head) {
  let fast = head, slow = head;
  while(fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    // 第1次相遇
    if(slow === fast) {
      break;
    }
    // 从head结点走到入环点需要走 ：a + nb， 而slow已经走了nb，那么slow再走a步就是入环点了。
    fast = head;  
    while(fast != slow) {
      fast = fast.next;
      slow = slow.next;
    }
    return fast;
  }
  return nnull;
}