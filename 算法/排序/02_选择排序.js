// 每次循环选取一个最小的数字放到前面的有序序列中。

// function selectionSort(array) {
//   const len = array.length;
//   for(let i = 0; i < len - 1; i++) {
//     let minIndex = i;
//     for(let j = i + 1; j < len; j++){
//       if(array[j] < array[minIndex]){
//         minIndex = j;
//       }
//     }
//     [array[minIndex], array[i]] = [array[i], array[minIndex]]
//   }
//   return array;
// }

// 时间复杂度：O(n2)
// 空间复杂度：O(1)
// 稳定性

function selectionSort(array){
  let len = array.length
  for(let i = 0; i < len - 1; i++){
    min = i
    for(let j = i+1; j < len; j++){
      if(array[j] < array[min]) {
        min = j
      }
    }
    [array[i],array[min]] = array[min],array[i]
  }
  return array
}
var array = [6,2,22,45,1,6,8,200,56,111];
console.log(selectionSort(array).join(','));

function selectionSort(array) {
  let len = array.length;
  for(let i = 0; i < len - 1; i++) {
    let min = i
    for(let j = i+1; j < len; j++) {
      if(array[j] < array[min]) {
        min = j
      }
    }
    [array[i],array[min]] = array[min],array[i]
  }
  return array
}