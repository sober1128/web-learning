// offer59  给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 1.暴力解法
var maxSlidingWindow = function(nums, k) {
  if(!nums.length || k == 0) return []
  const res = new Array(nums.length - k + 1)
  for(let i = 0; i < res.length; i++) {
    let max = nums[i]
    //在每个窗口内找到最大值
    for (let j = 1; j < k; j++) {
      max = Math.max(max, nums[i + j]);
    }
    res[i] = max
    // for(let j = i+1; j < i+k; j++) {
    //   max = Math.max(max, nums[j]);
    // }

    // res.push(Math.max(...nums.slice(i, i + k)));
  }
  return res
};

// 2.双端队列求解
var maxSlidingWindow = function(nums, k) {
  if(nums == null || k <= 0) return []
  let res = []
  const queue = []    //队列中存的是索引
  // 未形成窗口时
  for(let i = 0; i < k; i++){
    //在添加一个值之前，前面比他小的都要被移除掉，并且还要保证窗口中队列头部元素永远是队列中最大的
    while(queue.length && nums[i] > nums[queue[queue.length-1]]) {
      queue.pop()
    }
    queue.push(i)
  }
  res.push(nums[queue[0]])

  //形成窗口后
  for(let i = k; i < nums.length; i++){
    // 如果队列中队头元素和当前元素位置相差i-k，相当于队头元素要出窗口了，就把队头元素给移除，注意队列中存储的是元素的下标!!!
    if(queue.length && queue[0] <= i - k) {
      queue.shift()   //删除队头元素
    }
    while(queue.length && nums[i] > nums[queue[queue.length-1]]) {
      queue.pop()
    }
    queue.push(i)
    res.push(nums[queue[0]])  //队头元素是队列中最大的，把队列头部的元素加入到数组中
  }
  return res
}


var maxSlidingWindow = function(nums, k) {
  let queue = new Array()
  let i = 1
  queue.push(0)

  let ret = new Array()
  if (nums.length === 0) return ret
  while(i < k) {
      while(queue.length > 0 && nums[queue.top()] < nums[i]) {
          queue.pop()
      }
      queue.push(i)
      ++ i
  }
  ret.push(nums[queue[0]])
  while(i < nums.length) {
      if (queue[0] === i - k) {
          queue.shift()
      }
      while(queue.length > 0 && nums[queue.top()] < nums[i]) {
          queue.pop()
      }
      queue.push(i)
      ++ i
      ret.push(nums[queue[0]])
  }

  return ret
};