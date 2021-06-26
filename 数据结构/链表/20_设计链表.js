// https://leetcode-cn.com/problems/design-linked-list/solution/javascript-shi-xian-lian-biao-by-catboy/
var MyLinkedList = function() {
  this.head = null;
  this.tail = null;
  this.len = 0;
}

var ListNode = function(val) {
  this.val = val;
  this.next = null;
}

MyLinkedList.prototype.get = function(index) {
  if(index < 0 || index >= this.length) return -1;
  let cur = this.head;
  while(index--) {
    cur = cur.next;
  }
  return cur.val;
}

MyLinkedList.prototype.addAtHead = function(val) {
  let node = new ListNode(val);
  if(this.head == null) {
    this.tail = node;
  } else {
    node.next = this.head;
  }
  this.head = node;
  this.len++;
}

MyLinkedList.prototype.addAtTail = function(val) {
  let node = new ListNode(val);
  if(this.head == null) {
    this.head = node;
  } else {
    this.tail.next = node;
  }

}

// https://leetcode-cn.com/problems/design-linked-list/solution/dan-lian-biao-shi-xian-by-caifeng123/