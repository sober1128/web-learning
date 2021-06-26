// 不用遍历完，遍历到第k个即可
function kthLargest(root,k) {
  let stack = [], res = [], cur = root, count = 0
  while(cur || stack.length > 0) {
    while(cur){
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    count++
    res.push(cur.val)
    if(count == k) return cur.val
    cur = cur.right 
  }
  return 0
}

// 中序遍历
var kthLargest = function(root, k) {
  let res = [],cur = root,stack = []
  while(cur || stack.length > 0) {
    while(cur) {
      stack.push(cur)
      cur = cur.left
    }
    cur = stack.pop()
    res.push(cur.val)
    cur = cur.right
  }
  return res[res.length - k]
};