// var countPairs = function(deliciousness) {
//   let count = 0;
//   for(let i = 0; i < deliciousness.length-1; i++) {
//     for(let j = i+1; j < deliciousness.length; j++) {
//       let sum = deliciousness[i]+deliciousness[j];
//       // console.log(sum);
//       if(parseInt(Math.log2(sum)) === Math.log2(sum)) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

// var countPairs = function(deliciousness) {
//   let count = 0;
//   const countCore = (deliciousness, index, list) => {
//     if(list.length >= 2) {
//       let sum = list[0] + list[1];
//       // console.log('list='+ list,'----sum='+ sum);
//       if(parseInt(Math.log2(sum)) === Math.log2(sum)) {
//         count += 1;
//       }
//       return;
//     }
//     for(let j = index; j < deliciousness.length; j++) {
//       // if(j > index+1 && deliciousness[j] == deliciousness[j-1]) continue;
//       list.push(deliciousness[j]);
//       countCore(deliciousness, j+1, list);
//       list.pop();
//     }
//   }
//   countCore(deliciousness, 0, []);
//   return count;
// };

// var countPairs = function(deliciousness) {
//   const MOD = 1000000007;
//   let maxVal = 0;
//   for (const val of deliciousness) {
//       maxVal = Math.max(maxVal, val);
//   }
//   const maxSum = maxVal * 2;
//   let pairs = 0;
//   const map = new Map();
//   const n = deliciousness.length;
//   for (let i = 0; i < n; i++) {
//       const val = deliciousness[i];
//       console.log('val='+val);
//       for (let sum = 1; sum <= maxSum; sum <<= 1) {
//           const count = map.get(sum - val) || 0;
//           console.log('sum='+ sum,'-------------','sum - val = ' + (sum - val))
//           pairs = (pairs + count) % MOD;
//           console.log('count='+count,'pairs='+pairs);
//       }
//       map.set(val, (map.get(val) || 0) + 1);
//         console.log(map);
//   }
//   return pairs;
// };

// deliciousness = [1,1,1,3,3,3,7];
// console.log(countPairs(deliciousness));


const binarySearch = (nums, target) => {
  let l = 0, r = nums.length-1;
  let ans = nums.length;
  while(l <= r) {
    let mid = (l + r) >> 1;
    if(target < nums[mid]) {
      r = mid-1;
      ans = mid;
    } else {
      l = mid+1;
    }
  }
  return ans;
}
let nums = [5,7,7,8,8,10], target = 8;
console.log(binarySearch(nums, target));