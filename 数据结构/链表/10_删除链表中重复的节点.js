/*
      方法1.存储链表中元素出现的次数
      1.用一个map存储每个节点出现的次数
      2.删除出现次数大于1的节点
      此方法删除节点时可以使用上面总结的办法。

      时间复杂度：O(n)
      空间复杂度：O(n)
*/

function deleteDuplication(pHead) {
  const map = {}
  // if(!pHead || !pHead.next) return pHead
  if(pHead && pHead.next) {
    let current = pHead
    // 计数
    while(current) {
      const val = current.val
      map[current.val] = val ? val+1 : 1
      current = current.next
    }
    current = pHead
    while(current) {
      const val = map[current.val]
      if(val > 1) {
        if(current.next) {
          current.val = current.next.val
          current.next = current.next.next
        } else if(current === pHead){
          current = null
          pHead = null
        } else {
          current = pHead
          
        }
      }
    }
  }
}