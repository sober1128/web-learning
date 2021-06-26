// 在BFS中，结点的处理顺序与它们添加到队列的顺序是完全相同的顺序，即先进先出，所以广度优先搜索一般使用队列实现。

// 1.不分行从上到下打印
function PrintFromTopToBottom(root){
  if(!root) return null;
  const res = []
  const queue = [root]
  while(queue.length){
    let node = queue.shift()
    node.left && queue.push(node.length)
    node.right && queue.push(node.right)
    res.push(node.val)
  }
  return res;
}

// 2.把二叉树打印成多行
function print(root){
  const res = []
  const queue = [[root, 0]]
  let level = 0
  while(queue.length){
    let [node, level] = queue.shift()
    if(!res[level]) {
      res[level] = []
    } else {
      res.push(node.val)
    }
    node.left && queue.push([node.left, level+1])
    node.right && queue.push([node.right, level+1])
  }
  return res
}

// 3.之字形打印二叉树
function zPrint(root){
  const res = []
  const queue = [[root,0]]
  let level = 0
  while(queue.length) {
    let [node, level] = queue.shift()
    if(!res[level]) res[level] = []
    level & 1 ? res[level].push(node.val) : res[level].unshift(node.val)
    node.right && queue.push([node.right, level+1])
    node.left && queue.push([node.left, level+1])
  }
  return res
}

function zPrint(root){
  if(!root) return [];
  const res = []
  const queue = [root]
  let level = 0
  while(queue.length){
    res[level] = []   //第level层的遍历结果
    let num = queue.length  //第level层的节点数量
    while(num--){
      let node = queue.shift()
      res[level].push(node.val)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    if(level & 1 == 1){
      res[level].reverse()
    }
    level++
  }
  return res;
}