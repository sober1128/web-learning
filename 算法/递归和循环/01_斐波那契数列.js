// 1.---递归---
// function Fibonacci(n) {
//   if(n < 2) {
//     return n;
//   }
//   return Fibonacci(n-1) + Fibonacci(n-2);
// }

// 2.------递归+记忆法-----
// function Fibonacci(n, memory = []) {
//   if (n < 2) {
//     return n;
//   }
//   if (!memory[n]) {
//     memory[n] = Fibonacci(n - 1, memory) + Fibonacci(n - 2, memory);
//   }
//   return memory[n];
// }

// 3.-------动态规划------
function Fibonacci(n) {
  if(n <= 1) return n;
  let i = 1, pre = 0, cur = 1, res = 0;
  while(i++ < n) {
    res = pre + cur;
    pre = cur;
    cur = res;
  }
  return res;
}

console.log(Fibonacci(8));