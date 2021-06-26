// 使用变量carry记录进位,每次循环计算加上carry,当l1,l2为空,carry等于0退出循环
var addTwoNumbers = function (l1, l2) {
  let carry = 0, head = new ListNode(0);
  let cur = head;
  while(l1 || l2 || carry) {
    // l1.val = l1 ? l1.val : 0;    // Cannot set property 'val' of null
    // l2.val = l2 ? l2.val : 0;
    // let val = l1.val + l2.val + carry;
    let val = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = val >= 10 ? 1 : 0;
    val = val % 10;
    // 新节点赋值
    cur.next = new ListNode(val);
    cur = cur.next;
    if(l1) l1 = l1.next;
    if(l2) l2 = l2.next;
  }
  return head.next;
}

// 进阶：栈记录路径，从低位往高位计算，每次将旧节点放到后面即可
// https://leetcode-cn.com/problems/sum-lists-lcci/solution/lian-biao-qiu-he-bao-han-jin-jie-by-aeipyuan/