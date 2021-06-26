var mergeKLists = function(lists) {

  var mergeTwoLists = (l1,l2) => {
      var preHead = new ListNode(-1);
      var preNode = preHead;
      while(l1!= null && l2 != null){
          if(l1.val <= l2.val){
              preNode.next = l1;
              l1 = l1.next;
          }else{
              preNode.next = l2;
              l2 = l2.next;
          }
          preNode = preNode.next;
      }  
      preNode.next = l1 ? l1 :l2;
      return preHead.next;
  }

  let n = lists.length;
  if(n==0) return null;
  let res = lists[0]; // 初始化为第一个链表
  for(let i = 1; i <= n; i++) {
    if(lists[i]) {
      res = mergeTwoLists(res, lists[i]);
    }
  }
  return res;
}