var removeDuplicateNodes = function(head) {
  if(head == null || head.next == null) return head;
  let pre = head, cur = head.next;
  let set = new Set();
  set.add(head.val);      // 头节点的值加入
  while(cur) {
    if(set.has(cur.val)) {
      pre.next = cur.next;
      cur = cur.next;
    } else {
      set.add(cur.val);
      pre = pre.next;
      cur = cur.next;
    }
  }
  return head;
}

var removeDuplicateNodes = function(head) {
  if(head == null || head.next == null) return head;
  let set = new Set();
  set.add(head.val);
  let cur = head;
  while(cur.next) {
    if(set.has(cur.next.val)) {
      cur.next = cur.next.next;
    } else {
      set.add(cur.next.val);
      cur = cur.next;
    }
  }
  return head;
}