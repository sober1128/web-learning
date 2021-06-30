//25题  K 个一组翻转链表
// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/zui-nan-lian-biao-ti-liao-jie-yi-xia-javapythonjav/

var reverseKGroup = function(head, k) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let [start, end] = [dummy, dummy.next];
  let count = 0;
  while(end) {
    count++;
    if(count % k == 0) {
      start = reverseList(start, end.next);
      end = start.next;   // 函数里的pre
    } else {
      end = end.next;
    }
  }
  return dummy.next;

  // 翻转stat -> end的链表
  function reverseList(start, end) {
    let [pre, cur] = [start, start.next];
    const first = cur
    while(cur !== end) {
      let next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }
    start.next = pre
    first.next = cur
    return first;
  }
}

var reverseKGroup = function(head, k) {
  let dummy = new ListNode(0);
  dummy.next = head;

  // 开始时pre和end都指向排好链表的最后一个节点
  let pre = dummy, end = dummy;

  while(end.next != null){
      for(let i = 0; i < k; i++){
          if(end == null) break;
          end = end.next;
      }
      if(end == null) break; // 剩余节点保持原有顺序
      let start = pre.next;
      let nxt = end.next;
      end.next = null;
      pre.next = reverse(start);
      start.next = nxt;
      // 均指向排好链表的最后一个node
      pre = start;
      end = pre;
  }
  return dummy.next;
};

function reverse(head){
  let pre = null, cur = head;
  while(cur){
      nxt = cur.next;
      cur.next = pre; 
      pre = cur;
      cur = nxt;
  }
  return pre;
}

// https://leetcode-cn.com/problems/reverse-nodes-in-k-group/solution/25-k-ge-yi-zu-fan-zhuan-lian-biao-by-alexer-660/
