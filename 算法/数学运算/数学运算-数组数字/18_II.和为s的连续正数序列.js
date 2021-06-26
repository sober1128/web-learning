// 输入一个正整数 target ，输出所有和为 target 的连续正整数序列（至少含有两个数）。
// 序列内的数字由小到大排列，不同序列按照首个数字从小到大排列。

// 1.滑动窗口
var findContinuousSequence = function(target) {
  let i = 1, j = 1, sum = 0, res = []
  let mid = Math.floor((target+1)/2)
  while(i <= mid) {
    if(sum < target) {
      sum += j
      j++     //右边界右移  
    } else if(sum > target) {
      sum -= i
      i++     //左边界右移
    } else {
      let arr = []
      for(let k = i; k < j; k++) {    //左闭右开
        arr.push(k)
      }
      res.push(arr) //保存该序列
      sum -= i
      i++   //左边界向右移动
    }
  }
  return res
}

var findContinuousSequence = function(target){
  let i = 1, j = 2, sum = 3, res = []   // i,j两个指针
  while(i < Math.floor((target+1)/2)) {
    if(sum == target) {
      let arr = []
      for(let k = i; k <= j; k++) {
        arr.push(k)
      }
      res.push(arr)
    }
    if(sum > target) {
      sum -= i
      i++
    } else {
      j++
      sum += j
    }
  }
  return res;
}

var findContinuousSequence = function(target) {
  /*   根据题意可知 需要解决两个关键问题
      1. target的可选范围 根据推演可得到 [1, max] max = (target >> 1) + 1
      2. 构造一个单调递增队列
        a. 当累加值sum 大于target时 queue 出队 且 sum 减去出队值 sum -= queue.shift()
        b. 当 累加值 等于 target 且 至少包含两项时 将此时的有效 queue 存入 结果集res 中 
  */
  const max = (target >> 1) + 1 // 可选的最大正数范围 [1, max]
  const queue = [], res = []
  let sum = 0
  for(let i = 1; i <= max; i++) {
    sum += i
    queue.push(i)  // 一次将范围值入队
     // 当大于期望值target 时 出队且更新sum
     while(sum > target) sum -= queue.shift()

     // 当满足条件 存入结果集
     if(sum === target && queue.length >= 2) res.push(queue.slice(0))
  }
  return res
}


// https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/xiang-jie-hua-dong-chuang-kou-fa-qiu-gen-fa-jian-g/
// 2.根据等差数列求和公式 --- 求根法
var findContinuousSequence = function(target) {
  let res = []
  if(target <= 2) return []
  for(let i = 1; i < Math.ceil(target/2); i++) {
    const end = (-1 + Math.sqrt((1 + 4 * (i * i - i + 2 * target)))) / 2
    if(parseInt(end) === end) {   //求解的根为整数
      let arr = []
      for(let k = i; k <= end; k++) {
        arr.push(k)
      }
      res.push(arr)
    }
  }
  return res
}

// 3.间隔法---间隔就是末项y减去首项x，也就是首项和末项隔开多远的意思，可令i=间隔i=间隔
