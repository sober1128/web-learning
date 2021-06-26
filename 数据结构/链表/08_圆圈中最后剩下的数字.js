// 0,1,...,n-1这n个数字排成一个圆圈，从数字0开始，每次从这个圆圈里删除第m个数字。求出这个圆圈里剩下的最后一个数字。

/*
  解法1:用链表模拟环
        用链表模拟一个环
        模拟游戏场景
        记录头节点的前一个节点current，以保证我们找到的要删除的节点是current.next
        每次循环m次找到目标节点删除，直到链表只剩下一个节点
        时间复杂度O(m*n) 空间复杂度O(n)
*/
function Node(val) {
  this.val = val
  this.next = null
}

function LastRemaining_Solution(n, m) {
  if(n < 1 || m < 1) return -1
  let head = new Node(0)
  let current = head
  for(let i = 1; i < n; i++) {
    current.next = new Node(i)
    current = current.next
  }
  current.next = head   // 环

  while(current.next != current) {
    for(let i = 0; i < m; i++) {
      current = current.next
    }
    current.next = current.next.next
  }
  return current.val
}

/*
解法2:用数组模拟
每次计算下标，需要考虑末尾条件
*/

function LastRemaining_Solution(n, m) {
  if(n < 1 || m < 1) return -1
  const array = []
  for(let i = 0; i < n; i++) {
    array[i] = i
  }
  while(array.length > 1) {
    index = (index + m) % array.length - 1;
    if(index >= 0) {
      // splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
      array.splice(index, 1)    //从第index位开始删除一个元素
    } else {
      array.splice(array.length - 1, 1)     //最后一个数
      index = 0  // 从头开始继续计数
    }
  }
  return array[0]
}

/*解法3:数学推导
      f(n) = (f(n-1)+m)%n 即 f(n,m) = (f(n-1,m)+m)%n
      使用递归求解 边界条件为 n=1
      
      时间复杂度 1>2>3
      易理解程度 1>2>3
*/

function LastRemaining_Solution(n, m) {
  if(n < 1 || m < 1){
    return -1
  } else {
    return helper(n,m)
  }
}

function helper(n, m) {
  if(n == 1) return 0;
  return (helper(n - 1, m) + m) % n
}

// 约瑟夫问题详解  https://leetcode-cn.com/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof/solution/javajie-jue-yue-se-fu-huan-wen-ti-gao-su-ni-wei-sh/

function LastRemaining_Solution(n, m) {
  let res = 0
  for(let i = 1; i <= n; i++) {
    res = (res + m) % i
  }
  return res
}
/*
  最后只剩下一个元素，假设这个最后存活的元素为 num, 这个元素最终的的下标一定是0 （因为最后只剩这一个元素），
  所以如果我们可以推出上一轮次中这个num的下标，然后根据上一轮num的下标推断出上上一轮num的下标，
  直到推断出元素个数为n的那一轮num的下标，那我们就可以根据这个下标获取到最终的元素了。推断过程如下：

  首先最后一轮中num的下标一定是0， 这个是已知的。
  那上一轮应该是有两个元素，此轮次中 num 的下标为 (0 + m)%n = (0+3)%2 = 1; 说明这一轮删除之前num的下标为1；
  再上一轮应该有3个元素，此轮次中 num 的下标为 (1+3)%3 = 1；说明这一轮某元素被删除之前num的下标为1；
  再上一轮应该有4个元素，此轮次中 num 的下标为 (1+3)%4 = 0；说明这一轮某元素被删除之前num的下标为0；
  再上一轮应该有5个元素，此轮次中 num 的下标为 (0+3)%5 = 3；说明这一轮某元素被删除之前num的下标为3；
  ....

  因为我们要删除的序列为0-n-1, 所以求得下标其实就是求得了最终的结果。比如当n 为5的时候，num的初始下标为3，
  所以num就是3，也就是说从0-n-1的序列中， 经过n-1轮的淘汰，3这个元素最终存活下来了，也是最终的结果。

  总结一下推导公式：(此轮过后的num下标 + m) % 上轮元素个数 = 上轮num的下标
*/