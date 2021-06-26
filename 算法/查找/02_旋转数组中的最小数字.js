function minNumberInRotateArray(arr){
  let len = arr.length
  if(len == 0) return 0
  let low = 0, high = len - 1
  while(low < high){
    let mid = Math.floor((low+high) / 2)
    if(arr[mid] > arr[high]){
      low = mid+1
    } else if(arr[mid] == arr[high]){
      high -= 1
    } else {
      high = mid
    }
  }
  return arr[low]
}

let arr = [1,0,1,1,1]
console.log(minNumberInRotateArray(arr))