/*
    题目
    输入两个链表，找出它们的第一个公共结点。

    #思路
    1.先找到两个链表的长度length1、length2
    2.让长一点的链表先走length2-length1步，让长链表和短链表起点相同
    3.两个链表一起前进，比较获得第一个相等的节点

    时间复杂度O(length1+length2) 空间复杂度O(0)
*/

// 暴力解法-----按顺序遍历
function FindFirstCommonNode(headA, headB){
  let h1 = headA, h2 = headB;
  while(h1 !== h2){
      h1 = h1 === null ? headA: h1.next;
      h2 = h2 === null ? headB: h2.next;
  }
  return h1;
}

//  长链表先行  时间复杂度O(m+n) 不需要辅助空间
function FindFirstCommonNode(headA, headB) {
  if(!headA || !headB) return null
  function getLength(head){
    let current = head
    let count = 0
    while(current) {
      count++
      current = current.next
    }
    return count
  }
  let length1 = getLength(headA),
      length2 = getLength(headB);
  //长链表先行
  let long, short, interval
  if(length1 > length2) {
    long = headA
    short = headB
    interval = length1 - length2
  } else {
    long = headB
    short = headA
    interval = length2 - length1
  }
  while(interval--) {   // 长链表先走interval步
    long = long.next
  }
  while(long) {
    if(long == short) {
      return long
    }
    long = long.next
    short = short.next
  }
  return null
}

// 哈希表
var getIntersectionNode = function(headA, headB) {
  if(!headA || !headB) return null;
  const map = new Map();
  let hA = headA, hB = headB;
  while(hA) {
    if(!map.has(hA)) {
      map.set(hA, 1);
    }
    hA = hA.next;
  }
  while(hB) {
    if(map.has(hB)) return hB;
    hB = hB.next;
  }
  return null;
}