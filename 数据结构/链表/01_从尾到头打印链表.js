function printListFromTailToHead(head) {
  // if(!head || head.next == null) return head
  const result = []
  while(head){
    result.unshift(head.val)
    head = head.next
  }
  return result;
}