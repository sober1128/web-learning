/* 923 三数之和的多种可能
   给定一个整数数组 A，以及一个整数 target 作为目标值，返回满足 i < j < k 且 A[i] + A[j] + A[k] == target 的元组 i, j, k 的数量。
    由于结果会非常大，请返回 结果除以 10^9 + 7 的余数。
https://leetcode-cn.com/problems/3sum-with-multiplicity/solution/san-shu-zhi-he-de-duo-chong-ke-neng-by-leetcode/
*/

// 三指针方法  时间复杂度：O(N^2)，N为arr的长度。空间复杂度：O(1)。
var threeSumMulti = function(arr, target) {
  let MOD = Math.pow(10,9)+7;
  let ans = 0;
  arr.sort((a,b) => a-b); // 升序排序
  let len = arr.length;
  for(let i = 0; i < len-2; i++) {
    let T = target - arr[i];
    let j = i+1, k = len-1;
    while(j < k) {
      if(arr[j] + arr[k] > T) {
        k--;
      } else if (arr[j] + arr[k] < T) {
        j++;
      } else if(arr[j] != arr[k]) {
        let left = 1, right = 1;    // 统计arr[j]和arr[k] 的个数
        while(j+1 < k && arr[j] == arr[j+1]) {
          left++;
          j++;
        }
        while(k-1 > j && arr[k] == arr[k-1]) {
          right++;
          k--;
        }
        ans += left * right;
        ans = ans % MOD;
        j++; 
        k--;
      } else {    //arr[j] = arr[k]
        ans += (k-j+1) * (k-j) / 2;
        ans = ans % MOD;
        break;
      }
    }
  }
  return ans;
}


// 数学法 --- 记录情况和次数
/*  设 count[x] 为数组 A 中 x 出现的次数。对于每种 x+y+z == target，可以数一下有多少种可能的组合，这里可以看几个例子：
  如果 x，y，z 各不相同，有 count[x] * count[y] * count[z] 种组合。
  如果 x == y != z, 有 (count[x]选2)count[z] 种组合。
  如果 x != y == z，有 count[x] * (count[y]选2) 种组合
  如果 x == y == z，有 count[x] 选3 种组合。
*/
var threeSumMulti = function(arr, target) {
  arr.sort((a,b) => a-b);
  let hash = {};  // 记录每一个数的出现次数
  for(const num of arr) {
    hash[num] ? hash[num]++ : hash[num] = 1;
  }
  let B = [...new Set(arr)];  // 去重
  let mod = Math.pow(10,9)+7;

  //三指针求组合，存入path，需要注意一点，这里跟我举例有所区别，因为这里是可以取重复数的。i,j,k是可以重合的
  let path = [];
  for(let i = 0; i < B.length; i++) {
    let j = i, k = B.length-1;    // 注意这里 j=i  
    while(j <= k) {       // j <= k
      if(B[i] + B[j] + B[k] == target) {
        path.push([B[i], B[j], B[k]]);
      }
      if(B[i] + B[j] + B[k] > target) {
        k--;
      } else {
        j++;
      }
    }
  }

  // 使用数学方法计数----时间复杂度：O(N+W^2)，其中 N为arr的长度，W为A[i]中最大的数
// 空间复杂度： O(W)
  let ans = 0;
  for(let i = 0; i < path.length; i++) {
    if(path[i][0] == path[i][1] && path[i][1] != path[i][2]) {
      //  A A B  第一个数和第二个数相等
      let count = hash[path[i][1]];
      if(count < 2) {
        continue;  //如果总次数都没有2次，那么这个 A A B的组合显然是不成立的
      }
      ans += (count*(count-1)) / 2 * hash[path[i][2]];
    } else if(path[i][0] != path[i][1] && path[i][1] == path[i][2]) {
      // A B B 第二个数和第三个数相等
      let count = hash[path[i][1]];
      if(count < 2) {
        continue;  //如果总次数都没有2次，那么这个 A A B的组合显然是不成立的
      }
      ans += (count*(count-1)) / 2 * hash[path[i][0]];
    } else if(path[i][0] == path[i][1] && path[i][1] == path[i][2]) {
      // A A A  三数相等  数组排好序的
      let count = hash[path[i][0]];
      if(count < 3) {
        continue;
      }
      ans += (count*(count-1)*(count-2)) / 6;
    } else {
      // A B C
      ans += hash[path[i][0]]*hash[path[i][1]]*hash[path[i][2]];
    }
  }
  return ans%mod;
}


  //  我的回溯失败了。。。
var threeSumMulti = function(arr, target) {
  arr.sort((a,b) => a-b);   // 升序
  let count = 0;
  function dfs(arr, target, index, res, sum, count) {
    if(res.length == 3) {
      if(sum == target) {
        count++;
        res = [];
      }
      return;
    }
    for(let i = index; i < arr.length; i++) {
      res.push(arr[i]);
      dfs(arr, target, i+1, res, sum+arr[i], count);
      res.pop();
    }
  }
  dfs(arr, target, 0, [], 0, count);
  return count;
}