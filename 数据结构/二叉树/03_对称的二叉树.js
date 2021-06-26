// 镜像二叉树---对称二叉树

function isSymmetrical(Root) {
  return isSymmetricalTree(root, root)
}

function isSymmetricalTree(root1, root2) {
  if(!root1 && !root2) return true;
  if(!root1 || !root2) return false;
  if(root1.val != root2.val) {
    return false
  }
  return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left)
}


const isSymmetric = (root) => {
  // 1. 设置当前层
  const nowRoot = [root, root];
  
  // 2. 判断当前层是否可以延续
  while (nowRoot.length) {

    // 3. 获取左右部分
    const root1 = nowRoot.pop();
    const root2 = nowRoot.pop();

    // 4. 如果两者是空节点，继续
    if (!root1 && !root2) {
      continue;
    }

    // 5. 如果左边右边只有一个空，或者左边的值不等于右边
    if (!root1 || !root2 || root1.val !== root2.val) {
      return false;
    }

    // 6. 重点：添加值
    nowRoot.push(root1.left);
    nowRoot.push(root2.right);

    nowRoot.push(root1.right);
    nowRoot.push(root2.left);
  }

  // 7. 如果上面没情况发生
  return true;
};

// 对象属性
var isSymmetric = function(root) {
  const isSymmetricCore = (root1, root2) => {
    const queue = [{root1, root2}];
    while(queue.length) {
      const cur = queue.shift();
      if(!cur.root1 && !cur.root2) continue;
      if(!cur.root1 || !cur.root2) return false;
      if(cur.root1.val != cur.root2.val) return false;
      queue.push({
        root1: cur.root1.left,
        root2: cur.root2.right
      },
      {
        root1: cur.root1.right,
        root2: cur.root2.left
      })
    }  
    return true;
  }
  return isSymmetricCore(root,root);
};