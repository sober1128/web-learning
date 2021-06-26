//  归并排序--（二分、merge 函数）  https://leetcode-cn.com/problems/sort-list/solution/shou-hua-tu-jie-gui-bing-pai-xu-148-lian-biao-pai-/
var sortList = function (head) {
  if(!head || !head.next) return head;
  let slow = head, fast = head;
  let pre = null;
  while(fast && fast.next) {
    pre = slow;     // 获取保存中间节点// 获取中间节点
    slow = slow.next;
    fast = fast.nex.next;
  }
  pre.next = null;    // 断开
  const l = sortList(head);
  const r = sortList(slow);
  return Merge(l, r);
}

function Merge(l1, l2) {    // 合并两个有序链表
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

// 时间复杂度是 O(nlogn)
// 空间复杂度是 O(logn)


// Sort + 快速 + 归并 + 迭代 + 插入 + 堆排序  https://leetcode-cn.com/problems/sort-list/solution/sort-kuai-su-pai-xu-gui-bing-pai-xu-die-dai-cha-ru/

// 1.Sort 将链表的next打断，放入数组
// 对数组用sort比较val属性排序，将复杂问题交给运行环境
// V8引擎的sort实现包含归并算法
var sortList = function (head) {
  if(!head || !head.next) return null;
  let arr = [];
  while(head) {
    arr.push(head);
    let tmp = head.next;
    head.next = null;
    head = tmp;
  }
  arr.sort((a,b) => a.val - b.val).reduce((p, v) => p.next = v);
  return arr[0];
}

const sortList = function(head) {
  if(!head || !head.next) return head;
  let cur = head;
  let index = 0;
  const arr = [];
  while(cur) {
    arr[index++] = cur.val;
    cur = cur.next;
  }
  arr.sort((a,b) => a-b);   // 升序排序
  // 重建链表
  cur = head;
  index = 0;
  while(cur) {
    cur.val = arr[index++];
    cur = cur.next;
  }
  return head;
}

// 快速排序
var sortList = function(head) {
  let newHead = new ListNode(0);

}