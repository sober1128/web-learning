//  数组储存,双指针访问
// 将链表每个节点断开，放入数组s
// 指针i从头向尾，指针j从尾向头，重新组装链表
var reorderList = function(head) {
  let s = [], temp;
  while(head) {
    temp = head.next;
    head.next = null;
    s.push(head);
    head = temp;
  }
  let i = -1, j = s.length
  while (++i < --j) 
      s[i].next = s[j], 
      j !== i + 1 && (s[j].next = s[i + 1])
  return s[0];
};

// 方法二：寻找链表中点 + 链表逆序 + 合并链表

//  数组+链表
var reorderList = function(head) {
  if(!head) return null;
  let cur = head, arr = [];
  while(cur) {
    let tmp = cur.next;
    cur.next = null;
    arr.push(cur);
    cur = tmp;
  }
  //原链表第一个节点不变，依次加入 最右边节点，最左边节点（加入后移除）
  let left = 1, right = arr.length-1;
  while(left <= right) {
    //如果left===right时的最后next指向自己，最后有节点置空可以排除影响

    //先加右边节点
    head.next = arr[right];
    right--;
    head = head.next;
    //再加左边节点
    head.next = arr[left];
    left++;
    head = head.next;
  }
  //最后一个节点置空，避免出现环
  head.next = null;
}