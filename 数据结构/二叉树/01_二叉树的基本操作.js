// 完全二叉树的一些公式
// 1.第n层的节点数最多为2n个节点
// 2.n层二叉树最多有20+...+2n=2n+1-1个节点
// 3.第一个非叶子节点：length/2
// 4.一个节点的孩子节点：2n、2n+1

function Node(data) {
  this.data = data
  this.left = left
  this.right = right
}

Node.prototype = {
  show: function() {
    console.log(this.data)
  }
}

function Tree() {
  this.root = null;
}

Tree.prototype = {
  insert: function(data) {
    let node = new Node(data)
    if(!this.root) {
      this.root = node 
      return 
    }
    let current = this.root
    let parent = null
    while(current){
      parent = current
      if(data < parent.data) {
        current = current.left
        if(!current) {
          parent.left = node
          return
        }
      }
    }
  }
}