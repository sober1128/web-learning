//  169题  
// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。  https://leetcode-cn.com/problems/majority-element/solution/yi-ban-by-shetia/

// 1.排序  中间的数。时间复杂度 O(nlogn) 使用了快速排序
var majorityElement = function(nums) {
  nums.sort((a,b) => a-b);
  return nums[Math.floor(nums.length/2)];
};

// 2.用对象记录数出现的次数，大于一般就是多数元素
// 时间复杂度: O(n) 遍历一次  空间复杂度: O(n) obj中属性最多为 n/2 个
var majorityElement = function(nums) {
  let half = Math.floor(nums.length/2);
  let obj = {};
  for(let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
    if(obj[num] > half) return num;
  } 
};

// 3.栈方法  当元素和栈顶元素相等 或 空栈 时入栈，否则出栈。最后栈中剩下的必然是大于一半的那个元素  时间 O(n) 循环一次nums   空间 O(n)
var majorityElement = function(nums) {
  let stack = [];
  for(let num of nums) {
    let m = stack.length;
    if(stack[m - 1] === num || !m) {
      stack.push(n);
    } else {
      stack.pop();
    }
  }
  return stack[0];
}

// 方法四: 抵消(栈方法降维)  时间 O(n) 循环一次nums  空间 O(1) 使用几个基本变量
// 相同的加1, 不相同的减1, 因为是大于一半, 所以最后肯定剩下大于一半的那个
var majorityElement = function(nums) {
  let x = 0, m = 0;
  for(let num of nums) {
    if(m === 0) x = num;
    m += (x === num) ? 1 : -1;
  }
  return x;
}