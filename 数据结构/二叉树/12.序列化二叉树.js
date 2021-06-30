// DFS递归解法
const serialize = (root) => {
  if(root == null) return 'X';    // 遍历到null节点
  const left = serialize(root.left)   // 左子树的序列化
  const right = serialize(root.right)
  return root.val + ',' + left + ',' + right;  // 按  根,左,右  拼接字符串
}

const deserialize = (data) => {
  const list = data.split(',')    // split成数组
  const buildTree = (list) => {   // 基于list构建当前子树
    const rootVal = list.shift(); // 弹出首项，获取它的“数据”
    if(rootVal == 'X'){   //是X  返回null
      return null
    }
    const root = new TreeNode(rootVal)  // 不是X，则创建节点
    root.left = deserialize(list)       // 递归构建左子树
    root.right = deserialize(right)     // 递归构建右子树
    return root                         // 返回当前构建好的root
  }
  return buildTree(list);   // 构建入口
}


// BFS解法
const serialize = (root) => {
  const queue = [root];
  let res = [];
  while(queue.length) {  
    const node = queue.shift() // 考察出列的节点
    if(node){                  // 是真实节点，带出子节点入列
      res.push(node.val)       // 节点值推入res！！！不是节点
      queue.push(node.left)    // 子节点入列，不管是不是null节点都入列
      queue.push(node.right)
    } else {                   // 是null节点，没有子节点入列
      res.push('X')            // X 推入res
    }
  }
  return res.join(',')        // 转成字符串
}


var deserialize = function(data) {
  // BFS
 if(data == 'X') return null;
 const list = data.split(',');
 const root = new TreeNode(list[0]);
 const queue = [root];
 let cursor = 1;

 while(cursor < list.length){
     const node = queue.shift();
     const leftVal = list[cursor];
     const rightVal = list[cursor + 1];

     if(leftVal != 'X'){
         const leftNode = new TreeNode(leftVal);
         node.left = leftNode;
         queue.push(leftNode)
     }
     if(rightVal != 'X'){
         const rightNode = new TreeNode(rightVal);
         node.right = rightNode;
         queue.push(rightNode);
     }
     cursor += 2;
 }
 return root;
};

