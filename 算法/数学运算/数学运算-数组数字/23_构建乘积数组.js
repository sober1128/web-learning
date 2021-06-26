var constructArr = function(a) {
  let len = a.length
  const left = [],
        right = []
  for(let i = 0; i < len; i++) {
    let j = len - i - 1
    if(i == 0) {
      left[i] = a[i]
      right[j] = a[j]
    } else {
      left[i] = left[i-1] * a[i]
      right[j] = right[j+1] * a[j]
    }
  }
  const res = []
  for(let i = 0; i < len; i++) {
    if(i == 0) {
      res[i] = right[i+1]
    } else if(i == len - 1) {
      res[i] = left[i-1]
    } else {
      res[i] = left[i-1] * right[i+1]
    }
  }
  return res
};

// [ 1, 2, 6, 24, 120 ]
// [ 120, 120, 60, 20, 5 ]

var constructArr = function(a) {
  const len = a.length
  if(len == 0) return []
  let arr = [1]
  let right = 1
  for(let i = 1; i < len; i++) {    // 左下角
    arr[i] = arr[i-1] * a[i-1]
  }

  for(let i = len - 1; i >= 0; i--) {   //右上角
    arr[i] *= right
    right *= a[i]
  }
  return arr
}