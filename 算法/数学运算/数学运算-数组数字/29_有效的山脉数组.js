// 线性扫描    时间复杂度：O(N)，空间复杂度：O(1)
var validMountainArray = function(arr) {
  const len = arr.length;
  let i = 0;
  // 递增扫描
  while(i+1 < len && arr[i] < arr[i+1]) {
    i++;
  }

  // 最高点不能是数组的第一个位置或者最后一个位置
  if(i === 0 || i === N-1)   return false;

  // 递减扫描
  while(i+1 < len && arr[i] > arr[i+1]) {
    i++;
  }
  return i === len - 1;
}

//暴力  一次遍历---设置一个布尔标示位
var validMountainArray = function(arr) {
  if(arr.length < 3) return false;
  let i = 2, isMountain = true;   // 设置一个标志位
  while(i < arr.length) {
    if(arr[i-2] < arr[i-1] && arr[i-1] > arr[i]) {
      isMountain = false;   //达到山顶，单调性改变
    }

    if(isMountain && arr[i-2] >= arr[i-1]) {
      return false;  // 未达到山顶，单调性递增
    }

    if((!isMountain) && arr[i] >= arr[i-1]) {
      return false;   // 已经历山顶，单调性递减
    }
    i++;
  }
  return !isMountain;   //没经历过山顶必定false,其他情况在各个if已判断
}

// 双指针法
var validMountainArray = function(arr) {
  let len = arr.length;
  if(len < 3) return false;
  // let left, right;     
  let left = -1, right = -1;
  for(let i = 0; i < n-1; i++) {
    if(arr[i] < arr[i+1]) {
      left = i+1;
    } else {
      break
    }
  }
  for(let j = n-1; j > 0; j--) {
    if(arr[j] < arr[j-1]) {
      right = j-1;
    } else {
      break;
    }
  }
  // return left == right     //[2,0,2]也返回true;设置一个初始值，判断是否经历了for循环
  return left == right && left !== -1;
}

// 优化双指针，直接通过左右指针判断最后的山顶重合情况
var validMountainArray = function(arr) {
  let len = arr.length;
  if(len < 3) return false;
  let left = 0, j = len - 1;
  while(left < len-1 && arr[left] < arr[left+1]) {
    left++;
  }
  while(right > 0 && arr[right-1] > arr[right]){
    right--;
  }
  // return left === right;    //只这样判断不行  [1,2,3,4,5]会输出true
  return (left > 0) && (right < len-1) && (left === right);
}