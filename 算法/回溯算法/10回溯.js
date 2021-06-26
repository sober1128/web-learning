// const combinationSum = (candidates, target) => {
//   candidates.sort((a,b) => a-b)
//   const res = [];
//   const dfs = (index, temp, sum) => {
//     if(sum >= target) {
//       if(sum == target){
//         res.push([...temp])
//       }
//       return
//     }

//     for(let i = index; i < candidates.length; i++) {
//       if(i-1 > 0 && candidates[i-1] == candidates[i]){
//         continue;
//       }

//       temp.push(candidates[i]);
//       dfs(i+1, temp, sum + candidates[i])

//       temp.pop();
//     }
//   }

//   dfs(0, [], 0);
//   return res;
// }

var change = function(amount, coins) {
  let count = 0;
  const dfs = (amount, coins, index, sum) => {
    if(sum >= amount) {
      if(sum === amount) {
      count++;
      }
      return;
    }
    for(let i = index; i < coins.length; i++){
      sum += coins[i];
      dfs(amount, coins, i, sum);
      sum -= coins[i];    // 撤销
    }
  }
  dfs(amount, coins, 0, 0);
  return count;
};
let amount = 500;
let coins = [3,5,7,8,9,10,11];
console.log(change(amount, coins));   // 35502874