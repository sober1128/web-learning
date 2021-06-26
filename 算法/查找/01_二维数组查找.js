// function Find(target, array){
//   let i = array.length, j = 0
//   return compare(target, array, i, j)
// }

// function compare(target, array, i, j) {
//   if(array[i] == undefined || array[i][j] == undefined) return false;
//   let temp = array[i][j]
//   if(temp == target) return true
//   if(temp > target) {
//     return compare(target, array, i-1, j)
//   }
//   if(temp < target){
//     return compare(target, array, i, j+1)
//   }
// }


// 二分查找---有序----
// function binarySearch(data, arr, start, end) {
//   if (start > end) {
//       return -1;
//   }
//   var mid = Math.floor((end + start) / 2);
//   if (data == arr[mid]) {
//       return mid;
//   } else if (data < arr[mid]) {
//       return binarySearch(data, arr, start, mid - 1);
//   } else {
//       return binarySearch(data, arr, mid + 1, end);
//   }
// }

// function BinarySearch(target, arr){
//   // if(start > end) return false
//   let start = 0, end = arr.length;
//   while(start < end){
//     let mid = Math.floor((start+end) / 2)
//     if(arr[mid] == target){
//       return mid;
//     } else if(arr[mid] > target){
//       right = mid -1
//     } else if(arr[mid] < target){
//       left = mid + 1
//     }
//   }
//   return -1;
// }

function binarySearch(data, arr){
    let left = 0, right = arr.length - 1
    while(left <= right){
        let mid = Math.floor((left + right) / 2)
        if(arr[mid] == data){
            return mid
        } else if(arr[mid] > data){
            right = mid - 1
        } else if(arr[mid] < data){
            left = mid + 1
        } else {
            return -1
        }
    }
}
let arr = [1,2,5,6,8,9,10]
// console.log(binarySearch(8,arr,0,9))
console.log(binarySearch(8,arr))

function binarySearch(data, arr) {
    let left = 0, right = arr.length - 1
    while(left <= right) {
        let mid = Math.floor((left+right) / 2)
        if(arr[mid] == data) {
            return mid
        } else if(arr[mid] > data){
            right = mid - 1
        } else if(arr[mid] < data) {
            left = mid + 1
        } else {
            return -1
        }
    }
}