var verifyPostorder = function(postorder) {
  let len = postorder.length;
  let index = 0
  if(len <= 2) return true
  let root = postorder.pop()
  while(postorder[index] < root){
    index++
  }
  let left = postorder.slice(0,index),
      right = postorder.slice(index)
  const res = right.evver((item) => item > root)  //判断右子数的值是否都大于root
  if(res){
    return verifyPostorder(left) && verifyPostorder(right)
  } else {
    return false
  }
}