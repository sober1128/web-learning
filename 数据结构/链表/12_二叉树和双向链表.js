function Node(val,left,right) {
   this.val = val;
   this.left = left;
   this.right = right;
};


//-------------1.递归方法
var treeToDoublyList = function(root) {
  if(root == null) return null
  let head = null, pre = head
  dfs(root)
  // 完成中序遍历后，pre指向了最后一个节点，将其闭合成环状结构
  head.left = pre
  pre.right = head
  return head
}

function dfs(cur) {
  if(!cur) return;
  dfs(cur.left)   //遍历左子树，递归到最左边
  
  if(!pre){   //处理当前节点
    head = cur    //遍历到最左边节点，此时节点就是双向链表的head节点
  } else {
    pre.right = cur
  }

  cur.left = pre
  pre = cur

  dfs(cur.right)
}

//-------------2.非递归
var treeToDoublyList = function(root) {
  if(!root) return null
  let node = root, head = null, pre = head
  const stack = []
  while(stack.lenght || node) {
    if(node){
      stack.push(node)
      node = node.left
    } else {
      const top = stack.pop()
      
      if(!pre) {
        head = top
      } else {
        pre.right = top  
      }

      top.left = pre
      pre = top
      node = top.right
    }
  }
  head.left = pre
  pre.right = head
  return head;
}