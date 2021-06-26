function HasSubtree(root1, root2) {
  if(!root1 || !root2)  return false
  return isSub(root1, root2) && isSub(root1.left, root2) && isSub(root1.right, root2)
}

function isSub(A, B) {
  if(B == null) return true
  if(A == null || A.val != B.val) return false
  return isSub(A.left, B.left) && isSub(A.right, B.right)
}