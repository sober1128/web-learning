// 将左侧序列看成一个有序序列，每次将一个数字插入该有序序列。
// 拆入式，从有序序列最右侧开始比较，若比较的数较大，后移一位

// function insertSort(array) {
//   for(let i = 1; i < array.length; i++) {
//     let target = i;
//     for(let j = i - 1; j >= 0; j--) {
//       if(array[target] < array[j]) {
//         [array[target], array[j]] = [array[j], array[target]];
//         target = j;
//       } else {
//         break;
//       }
//     }
//   }
//   return array;
// }

// function insertSort(array) {
//   for(let i = 1; i < array.length; i++) {
//     let target = i;
//     for(let j = i - 1; j >= 0; j--) {
//       if(array[j] > array[target]){
//         [array[target], array[j]] = [array[j], array[target]];
//         target = j
//       } else {
//         break
//       }
//     }
//   }
//   return array;
// }

function insertSort(array) {
  for(let i = 1; i < array.length; i++){
    let temp = array[i]
    let j = i-1
    while(array[j] > temp  && j >= 0){
      array[j+1] = array[j]
      j--
    }
    array[j+1] = temp
  }
  return array
}

// 时间复杂度：O(n2)
// 空间复杂度：O(1)
// 稳定性


var array = [6,2,22,45,1,6,8,200,56,111];
console.log(insertSort(array).join(','));

function insertSort(array) {
  for(let i = 1; i <array.length; i++) {
    let temp = array[i];
    let j = i-1
    while(array[j] > temp && j >= 0) {
      array[j+1] = array[j]
      j--
    }
    array[j+1] = temp
  }
  return array
}