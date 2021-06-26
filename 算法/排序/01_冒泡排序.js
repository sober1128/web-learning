// 循环数组，比较当前元素和下一个元素，如果当前元素比下一个元素大，向上冒泡
// 这样一次循环之后最后一个数就是本数组最大的数。
// 下一次循环继续上面的操作，不循环已经排好序的数
// ---优化---：当一次循环没有发生冒泡，说明已经排序完成，停止循环

// function bubbleSort(array) {
//   const len = array.length;
//   for(let i = 0; i <len; i++) {
//     let complete = true;
//     for(let j = 0; j < len - i; j++) {
//       // 比较相邻数
//       if(array[j] > array[j + 1]){
//         [array[j], array[j+1]] = [array[j+1], array[j]]
//         complete = false
//       }
//     }
//     // 没有冒泡，结束循环
//     if(complete) {
//       break;
//     }
//   }
//   return array;
// }

// 时间复杂度：O(n2)
// 空间复杂度：O(1)
// 稳定性



// function bubbleSort(array){
//   let len = array.length
//   for(let i = len -1; i >= 0; i--){
//     for(let j = 0; j <= i; j++){
//       if(array[j+1] < array[j]){
//         [array[j+1],array[j]] = [array[j], array[j+1]]
//       }
//     }
//   }
//   return array
// }

// 测试
var array = [6,2,22,45,1,6,8,200,56,111];
console.log(bubbleSort(array).join(','));

function bubbleSort(array) {
  let len = array.length;
  for(let i = 0; i < len; i++) {
    for(let j = i; j < len - i; j++) {
      if(array[j] > array[j+1]) {
        [array[j], array[j+1]] = [array[j+1], array[j]]
      }
    }
  }
  return array
}

