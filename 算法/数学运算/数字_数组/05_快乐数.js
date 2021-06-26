var isHappy = function(n) {
  let res = sum(n);
  let obj = {}; //用个对象来记录出现过的值, 一旦再次出现就说明是无限循环了, 就表明这数并不快乐
  while(res != 1) {
    if(res in obj) return false;
    obj[res] = 1;
    res = sum(res);
  }
  return true;
}

function sum(n) {
  n = n + '';
  let sum = 0;
  for(let num of n) {
    sum += num * num;
  }
  return sum;
}

// 快慢指针  
// 慢的 只做一次平方求和, 快的做两次, 显然 快的 比 慢的 快,
// 如果 (死循环 或者 最终等于1) 的话 fast 肯定会 和 slow 碰上
// 等于1后 fast会一直等于1, 因为 1的平方 等于1, 之后就坐等slow追上了
// 死循环, 跑圈, slow 最终会碰上 fast

var isHappy = function(n) {
  let slow = sum(n);
  let fast = sum(slow);
  while(slow != fast) {
    slow = sum(slow);
    fast = sum(sum(fast));
  }
  return slow == 1;
}

function sum(n) {
  n = n + '';
  let sum = 0;
  for(let num of n) {
    sum += num * num;
  }
  return sum;
}