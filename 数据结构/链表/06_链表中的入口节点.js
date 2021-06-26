// 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。

/*
  声明两个指针 P1 P2
    1.判断链表是否有环： P1 P2 从头部出发，P1走两步，P2走一步，如果可以相遇，则环存在
    2.从环内某个节点开始计数，再回到此节点时得到链表环的长度 length
    3.P1、P2 回到head节点，让 P1 先走 length 步 ，当P2和P1相遇时即为链表环的起点
*/

function EntryNodeOfLoop(pHead) {
  if(pHead == null || pHead.next == null) return null
  let P1 = pHead.next, P2 = pHead.next.next
  // 是否有环
  while(P1 != P2){
    if(P2 == null || P2.next == null) {
      return null   //P2走到链表末尾了，说明不是环
    }
    P1 = P1.next
    P2 = P2.next.next
  }
  // 获取环的长度
  let temp = P1   //保存P1的位置
  let length = 1
  while(temp != P1) {
    P1 = P1.next
    length++
  }
  // 找公共节点
  P1 = P2 = pHead
  while(length--) {
    P1 = P1.next
  }
  while(P1 != P2) {
    P1 = P1.next
    P2 = P2.next
  }
  return P1
}