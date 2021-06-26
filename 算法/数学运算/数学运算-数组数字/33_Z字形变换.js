// 从左往右按箭头方向迭代s，将每个字符添加到合适的行，之后从上到下遍历行即可

// var convert = function(s, numRows) {
//   if(numRows == 1) return s;
//   let len = numRows;
//   let res = [], down = false, row = 0;
//   for(let i = 0; i < len; i++) {
//     res[i] = "";
//   }
//   let ans = "";
//   for(const c of s) {
//     res[row] += c;
//     if(row == 0 || row == numRows-1) {
//       down = !down;
//     }
//     row += down ? 1 : -1;
//   }
//   for(let i = 0; i < len; i++) {
//     ans += res[i];
//   }
//   return ans;
// }

let str = " 345 abc  00245 with u";
let number = parseInt(str);
console.log(number);