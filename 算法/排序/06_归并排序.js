// 归并操作的工作原理如下：
// 第一步：申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列
// 第二步：设定两个指针，最初位置分别为两个已经排序序列的起始位置
// 第三步：比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置
// 重复步骤3直到某一指针超出序列尾
// 将另一序列剩下的所有元素直接复制到合并序列尾


// 1.------递归实现------
// 分割数组时直接将数组分割为两个数组，合并时直接合并数组。
// 优点：思路简单，写法简单
// 缺点：空间复杂度略高，需要复制多个数组
function mergeSort(array) {
  if(array.length < 2) return array
  const mid = Math.floor(array.length / 2)
  const front = array.slice(0, mid)
  const end = array.slice(mid)
  return Merge(mergeSort(front), mergeSort(end))
}

function merge(front,end) {
  const temp = []
  while(front.length && end.length) {
    if(front[0] < end[0]){
      temp.push(front.shift())
    }  else {
      temp.push(end.shift())
    }
  }
  while(front.length) {
    temp.push(front.shift())
  }
  while(end.length) {
    temp.push(end.shift())
  }
  return temp
}


// 2.写法2
// 记录数组的索引，使用left、right两个索引来限定当前分割的数组。

// 优点：空间复杂度低，只需一个temp存储空间，不需要拷贝数组
// 缺点：写法复杂
function mergeSort(array, left, right, temp) {
  if(left < right) {
    const mid = Math.floor((left+right) / 2)
    mergeSort(array, left, mid, temp)
    mergeSort(array, mid+1, right, temp)
    merge(array, left, right, temp)
  }
  return array
}

function merge(array, left, right, temp) {
  const mid = Math.floor((left+right) / 2);
  let leftIndex = left,
      rightIndex = mid + 1,
      tempIndex = 0;
  while(leftIndex <= mid && rightIndex <= right) {

  }
}

// 测试
var array = [6,2,22,45,1,6,8,200,56,111];
console.log(mergeSort(array, 0, array.length-1, temp = new Array(array.length)).join(','));

function merge(left, right) {
  const temp = []
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      temp.push(left.slice(0))
    }  else {
      temp.push(right.slice(0))
    }
  }
  return temp.concat(left).concat(right)
}

function mergeSort(array) {
  if(array.length < 2) return array
  const mid = Math.floor((left+right) / 2)
  const left = array.slice(0, mid)
  const right = array.slice(mid)
  mergeSort(left)
  mergeSort(right)
  merge(left, right)
}