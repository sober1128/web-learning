function TreeNode(val) {
  this.val = val
  this.left = null 
  this.right = null
}

// 递归重构
function buildTree(preorder, inorder) {
  // if(!preorder) return null;    // 返回空节点---报错
  if(preorder.length == 0) return null    //判断长度
  let root = new TreeNode(preorder[0])
  let index = inorder.indexOf(preorder[0])
  root.left = buildTree(preorder.slice(1,index+1), inorder.slice(0, index))
  root.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))
  return root; 
}

// 优化1：字符串截取存在性能消耗，没必要每次都切割。用【两个指针】表示即可。递归函数传指针。
const buildTree = (preorder, inorder) => {
  const buildTreeCore = (p_start, p_end, i_start, i_end) => {
    if(p_start > p_end) return null;
    if(p_start == p_end) return new TreeNode(preorder[p_start]);
    let rootVal = preorder[p_start];    // 根节点的值
    let root = new TreeNode(rootVal);   // 根节点

    let mid = inorder.indexOf(rootVal);         // 根节点在inorder中的位置
    let leftNum = mid - i_start;        // 左子树的节点数
    root.left = buildTreeCore(p_start+1, p_start+leftNum, i_start, mid-1);
    root.right = buildTreeCore(p_start+leftNum+1, p_end, mid+1, i_end);
    return root;
  }
  return buildTreeCore(0, preorder.length-1, 0, inorder.length-1);
}

// indexOf 的使用导致每次递归都花 O(n) 的时间定位根节点的位置，不理想。
// 提前把 inorder 的元素和索引存到哈希表中，用空间换取时间。
function buildTree(preorder, inorder) {
  let map = new Map();
  for(let i = 0; i < inorder.length; i++) {
    map.set(inorder[i], i);
  }
  const buildTreeCore = (p_start, p_end, i_start, i_end) => {
    if(p_start > p_end) return null;
    // if(p_start == p_end) return new TreeNode(preorder[p_start]);
    let rootVal = preorder[p_start];    // 根节点的值
    let root = new TreeNode(rootVal);   // 根节点
    let mid = map.get(rootVal);         // 根节点在inorder中的位置
    let leftNum = mid - i_start;        // 左子树的节点数
    root.left = buildTreeCore(p_start+1, p_start+leftNum, i_start, mid-1);
    root.right = buildTreeCore(p_start+leftNum+1, p_end, mid+1, i_end);
    return root;
  }
  return buildTreeCore(0, preorder.length-1, 0, inorder.length-1);
}


var buildTree = function(preorder, inorder){
  if(preorder.length == 0) return null
  let root = new TreeNode(preorder[0]);
  let stack = [root]    // 数组模拟栈
  let index = 0, len = preorder.length
  for(let i = 1; i < len; i++) {
    let preVal = preorder[i]
    let node = stack[stack.length - 1]    //栈顶元素
    if(node.val != inorder[index]) {    //栈顶的值不等于inorder[index]
      node.left = new TreeNode(preVal)    // 继续以前当前值创建节点
      stack.push(node.left)   
    } else {
      while(stack.length !== 0 && stack[stack.length-1].val == inorder[index]) {
        stack.pop()
        index++
      }
      node.right = new TreeNode(preVal)
      stack.push(node.right)
    }
  }
  return root;
}