// 递归
var sortedArrayToBST = function(nums) {
  if(nums.length == 0) return null;
  let len = nums.length;
  if(len == 1) return new TreeNode(nums[0]);
  let mid = Math.floor(len/2);
  let root = new TreeNode(nums[mid]);
  root.left = sortedArrayToBST(nums.slice(0,mid));
  root.right = sortedArrayToBST(nums.slice(mid+1));
  return root;
};


var sortedArrayToBST = function(nums) {
  const helper = (l, r) => {
    if(l > r) return null;
    const mid = (l+r) >> 1;
    const node = new TreeNode(nums[mid]);
    // const left = helper(l, mid-1);
    // const right = helper(mid+1, r);
    // node.left = left;
    // node.right = right;
    node.left = helper(l, mid-1);
    node.right = helper(mid+1, r);
    return node;
  }
  return helper(0, nums.length-1);
};