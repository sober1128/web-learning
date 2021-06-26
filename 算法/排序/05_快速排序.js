// 快速排序：通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小，再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。

// 实现步骤：-----分治思想-----

// 选择一个基准元素target（一般选择第一个数）
// 将比target小的元素移动到数组左边，比target大的元素移动到数组右边
// 分别对target左侧和右侧的元素进行快速排序

// 写法1
// 单独开辟两个存储空间left和right来存储每次递归比target小和大的序列
// 每次递归直接返回left、target、right拼接后的数组
// 浪费大量存储空间，写法简单

// function quickSort(array) {
//   if(array.length < 2) {
//     return array
//   }
//   const left = [];
//   const right = [];
//   const target = array[0]

//   for(let i = 1; i < array.length; i++) {
//     if(array[i] < target) {
//       left.push(array[i])
//     } else {
//       right.push(array[i])
//     }
//   }
//   return quickSort(left).cancat([target], quickSort(right))
// }


// 写法2    -----   // https://www.runoob.com/w3cnote/quick-sort.html
// 对挖坑填数进行总结:
    // 1．i =L; j = R; 将基准数挖出形成第一个坑a[i]。
    // 2．j--由后向前找比它小的数，找到后挖出此数填前一个坑a[i]中。
    // 3．i++由前向后找比它大的数，找到后也挖出此数填到前一个坑a[j]中。
    // 4．再重复执行2，3二步，直到i==j，将基准数填入a[i]中。

function quickSort(array, start, end){
  if(end <= start) {
    return
  }
  const  target = array[start];
  let l = start, r = end;
  while(l < r){
    while(l < r && array[r] >= target){
      r--
    }
    array[l] = array[r]
    while(l < r && array[l] < target){
      l++
    }
    array[r] = array[l]
  }
  array[l] = target
  quickSort(array, start, l-1)
  quickSort(array, l+1, end)
  return array
}

// const quickSort = (array) => {
//   const sort = (arr, left = 0, right = arr.length - 1) => {
//    if (left >= right) {//如果左边的索引大于等于右边的索引说明整理完毕
//     return
//    }
//   let i = left
//   let j = right
//   const baseVal = arr[j] // 取无序数组最后一个数为基准值
//   while (i < j) {//把所有比基准值小的数放在左边大的数放在右边
//    while (i < j && arr[i] <= baseVal) { //找到一个比基准值大的数交换
//     i++
//    }
//    arr[j] = arr[i] // 将较大的值放在右边如果没有比基准值大的数就是将自己赋值给自己（i 等于 j）
//    while (j > i && arr[j] >= baseVal) { //找到一个比基准值小的数交换
//     j--
//   }
//    arr[i] = arr[j] // 将较小的值放在左边如果没有找到比基准值小的数就是将自己赋值给自己（i 等于 j）
//   }
//   arr[j] = baseVal // 将基准值放至中央位置完成一次循环（这时候 j 等于 i ）
//   sort(arr, left, j-1) // 将左边的无序数组重复上面的操作
//   sort(arr, j+1, right) // 将右边的无序数组重复上面的操作
//   }
//   const newArr = array.concat() // 为了保证这个函数是纯函数拷贝一次数组
//   sort(newArr)
//   return newArr
//  }
// // 测试
// var array = [6,2,22,45,1,6,8,200,56,111];
// console.log(quickSort(array,0,array.length-1).join(','));

/*作者：riiise
链接：https://www.nowcoder.com/discuss/672729?source_id=discuss_experience_nctrack&channel=-1
来源：牛客网

给定一个字符串chas[],其中只含有字母字符和“*”字符，现在想把所有“*”全部挪到chas的左边，字母字符移到chas的右边。完成调整函数。

示例：把'o*f*f*e*r*'变成'*****offer'   */
const stringChange = (s) => {
  const left = [], right = [];
  for(let ch of s) {
    if(ch == '*') {
      left.push(ch);
    } else {
      right.push(ch);
    }
  }
  return left.concat(right).join('');
}

let str = 'o*f*f*e*r*';
console.log(stringChange(str));