//  方法1---哈希表  时间复杂度：O(N)  空间复杂度：O(N)---哈希表的空间，存放链表的节点数
var hasCycle = function(head) {
  let set = new Set();
  let cur = head;
  while(cur) {
    if(set.has(cur)) {
      return true;
    }
    set.add(cur)
    cur = cur.next;
  }
  return false;
}

//  方法1---快慢指针法  时间复杂度：O(N)  空间复杂度：O(1)---仅两个指针的空间
var hasCycle = function(head) {
  if(head == null || head.next == null) return false;
  let slow = head, fast = head.next;
  while(slow != fast) {
    if(fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;       //慢指针走一步
    fast = fast.next.next;  //快指针走两步
  }
  return true;
}

var hasCycle = function(head) {
  let slow = head, fast = head;
  while(fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if(slow === fast) {
      return true;
    }
  }
  return false;
}