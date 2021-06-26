// function jumpFloor(n) {
//   if(n <= 2) return n;
//   return jumpFloor(n-1) + jumpFloor(n-2);
// }

// function jumpFloor(n) {
//   if(n <= 2) return n;
//   let i = 2, pre = 1, cur = 2, res = 0;
//   while(i++ < n) {
//     res = pre + cur;
//     pre = cur;
//     cur = res;
//   }
//   return res;
// }

function jumpFloor(n){
  if(n <= 2) return n;
  let pre = 1, cur = 2, res = 0;
  for(let i = 2; i < n; i++){
    res = pre + cur;
    pre = cur;
    cur = res;
  }
  return res;
}
console.log(jumpFloor(5));