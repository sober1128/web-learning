// 希尔排序是插入排序的一种更高效率的实现。它与插入排序的不同之处在于，它会优先比较距离较远的元素。希尔排序的核心在于间隔序列的设定。既可以提前设定好间隔序列，也可以动态的定义间隔序列。

function shellSort(array) {
  const len = array.length;
  for(let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for(let i = gap; i < len; i++) {
      for(let j = i - gap; j >= 0 && array[j] > array[gap+j]; j -= gap) {
        [array[j], array[gap+j]] = [array[gap+j], array[j]];
      }
    }
  }
  return array;
}

// 测试
var array = [6,2,22,45,1,6,8,200,56,111];
console.log(shellSort(array).join(','));