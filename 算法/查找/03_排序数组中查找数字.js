// 二分查找  在排序数组中查找某个数
// function binarySearch(data, arr, start, end){
//   if(start > end) return -1
//   let mid = Math.floor((start+end) / 2)
//   if(data == arr[mid]){
//     return mid
//   } else if(data < arr[mid]){
//     return binarySearch(data, arr, start, mid-1)
//   } else {
//     return binarySearch(data,arr,mid+1, end)
//   }
// }

// 统计一个数字在排序数组中出现的次数。
function search(data, arr){
  let left = 0, count = 0;
  let len = arr.length
  while(left <= len){
    while(arr[left++] == data){
      count += 1;
    }
  }
  if(count == 0) {
    return -1
  } else{
    return count;
  }
}

let arr = [1,2,2,2,3,4,5]
console.log(search(2,arr))

