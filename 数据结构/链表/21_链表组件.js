var numComponents = function(head, G) {
  const set = new Set();
  G.forEach( item => set.add(item));
  let node = head, count = 0;
  while(node) {
        // 这里一定先判断cue.next是否为空，为空就不进行下一步判断了。不能改变判断顺序

    if(set.has(node.val) && (node.next == null || ! set.has(node.next.val))) {
      count++;
    }
    node = node.next;
  }
  return count;
} 