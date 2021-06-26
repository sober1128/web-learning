// 复杂链表-----图的遍历----递归
var copyRandomList = function(head) {
  const map = new Map()
  const copy = dfs(head)
  return copy
}

function dfs(node) {
  if(!node) return null
  if(map.has(node)) return map.get(node)
  copyNode = new Node(node.val)
  map.set(node, copyNode)     //存入哈希表
  copyNode.next = dfs(node.next)
  //深度优先遍历----先把next遍历完，再遍历random

        // 首先反复运行第一部分，copyNode.next = dfs(node.next)会递归得越来越深，当碰到node = null时。开始运行第二部分，准备从尾部节点回溯
        // 回溯时，先从尾结点开始回溯，调用copyNode.random = dfs(node.random)时，由于节点都保存在了哈希表中，因此return map.get(node)，这时一层层回溯random指针，完成最后一个节点，故return copyNode

        // 第二部分
  copyNode.random = dfs(node.random)
  return copyNode
}


// 利用Map()以及两次遍历
var copyRandomList = function(head) {
  if(!head) return null;
  let map = new Map();
  let cur = head;
  while(cur){
      map.set(cur, new Node(cur.val));    //以节点值创建新的节点
      cur = cur.next;
  }
  cur = head; //重新赋值，因为上一个循环完了后cur = null
  while(cur){
      map.get(cur).next = cur.next ? map.get(cur.next) : null;
      map.get(cur).random = cur.random ? map.get(cur.random) : null;
      cur = cur.next;
  }
  return map.get(head);
};

/*
  1.复制一份链表放在前一个节点后面，即根据原始链表的每个节点N创建N',把N'直接放在N的next位置，让复制后的链表和原始链表组成新的链表。
  2.给复制的链表random赋值，即N'.random=N.random.next。
  3.拆分链表，将N`和N进行拆分，保证原始链表不受影响。
*/
function Clone(head) {
  if(head == null) return null
  cloneNodes(head)    //复制节点和next
  cloneRandom(head)   //复制random
  return reconnectNodes(head)   //拆分链表
}

function cloneNodes(head) {
  let current = head
  while(current) {
    // let cloneNode = {
    //   val: current.val,
    //   next: current.next    //创建的时候已经指向了
    // }
    let cloneNode = new Node(current.val)     //创建N'
    cloneNode.next = current.next     
    current.next = cloneNode    
    current = cloneNode.next
  }
}

function cloneRandom(head) {
  let current = head
  while(current) {
    let cloneNode = current.next    //复制节点已经创建，直接拿来用
    cloneNode.random = current.random ? current.random.next : null
    current = cloneNode.next
  }
}

function reconnectNodes(head) {
  let cloneHead = head.next
  let cloneNode = cloneHead
  let current = head
  while(current) {
    current.next = cloneNode.next
    current = cloneNode.next
    if(current) {
      cloneNode.next = current.next
      cloneNode = current.next
    } else {
      cloneNode.next = null
    }
  }
  return cloneHead;
}