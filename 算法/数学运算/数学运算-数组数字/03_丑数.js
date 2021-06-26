/* 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
例如6、8都是丑数，但14不是，因为它包含质因子7。
习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。

*/

// 时间复杂度 O(N) ：其中 N = n ，动态规划需遍历计算dp 列表。
// 空间复杂度 O(N) ：长度为 N 的 dp 列表使用 O(N) 的额外空间。

// function GetUglyNumber_Solution(index) {
//   if(index <= 0) return 0
//   let arr = [1], i2 = i3 = i5 = 0, cur = 0
//   while(arr.length < index) {
//     // 需要数组保存已经生成的丑数
//     arr.push(Math.min(arr[i2] * 2, arr[i3] * 3, arr[i5] * 5))
//     const cur = arr[arr.length - 1]
//     while(arr[i2] * 2 == cur){
//       i2++
//     }
//     while(arr[i3] * 3 == cur){
//       i3++
//     }
//     while(arr[i5] * 5 == cur){
//       i5++
//     }
//   }
//   return  arr[index - 1]
// }

function GetUglyNumber_Solution(n) {
  if(n <= 0) return 0;
  let dp = new Array(n)
  dp[0] = 1
  let i2 = 0, i3 = 0, i5 = 0
  for(let i = 1; i <= n; i++) {
    // let n2 = i2*2, n3 = i3*3, n5 = i5*5
    let n2 = dp[i2]*2, n3 = dp[i3]*3, n5 = dp[i3]*5
    dp[i] = Math.min(n2, n3, n5)
    if(dp[i] == n2) {
      i2++
    }
    if(dp[i] == n3) {
      i3++
    }
    if(dp[i] == n5) {
      i5++
    }
  }
  return dp[n-1]
}


console.log(GetUglyNumber_Solution(10))
// [1,2,3,4,5,6,8,9,10,12,15,16....]