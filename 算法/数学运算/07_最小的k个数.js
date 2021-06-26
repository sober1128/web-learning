var getLeastNumbers = function(arr, k) {
  arr.sort((a,b) => a-b)  
  //升序排序--对原数组从小到大排序后取出前 kk 个数即可。
  return arr.slice(0,k)
};
// 使用高级排序（代码用的是快排），时间复杂度是O(NlogN)，空间复杂度是O(logN)


//快速排序----时间复杂度O(NlogN)
// 空间复杂度 O(N)： 快速排序的递归深度最好（平均）为O(logN) ，最差情况（即输入数组完全倒序）为O(N)。
var getLeastNumbers = function(arr, k) {
  const quickSort = (arr, start, end) => {
    let target = arr[start], l = start, r = end
    if(end <= satrt) return   //子数组长度为1时终止递归
    while(l < r) {
      while(l < r && arr[r] >= target){
        r--
      }
      arr[l] = arr[r]
      while(l < r && arr[l] < target){
        l++
      }
      arr[r] = arr[l]
    }
    arr[l] = target
    quickSort(arr, start, l-1)
    quickSort(arr, l+1, end)
    return arr
  }
  quickSort(arr, 0, arr.length-1)
  return arr.slice(0,k)
}

// 方法二： 基于快速排序的数组划分-----快速排序的哨兵划分
// 时间复杂度 O(N)   空间复杂度O(1)不需要额外空间
function partition(arr, start, end) {
  const target = arr[start]
  let l = start,  r = end
  while(l < r) {
    while(l < r && arr[r] >= target) {
      r--
    }
    arr[l] = arr[r]
    while(l < r && arr[l] < target) {
      l++
    }
    arr[r] = arr[l]
  }
  arr[l] = target
  return l;   //划分的那个值的索引
}

var getLeastNumbers = function(arr, k) {
  const length = arr.length
  if(k >= length) return arr
  let left = 0, right = length - 1
  let index = partition(arr, left, right)
  while(index !== k) {
    if(index < k) {
      index = partition(arr, index + 1, right)
    } else if(index > k) {
      index = partition(arr, left, index - 1)
    }
  }
  return arr.slice(0,k)
}












//  最大堆--性质：节点值大于子节点的值，堆顶元素是最大元素
/*（1）创建大小为 k 的最大堆
  （2）将数组的前 k 个元素放入堆中
  （3）从下标 k 继续开始依次遍历数组的剩余元素：
        如果元素小于堆顶元素，那么取出堆顶元素，将当前元素入堆
        如果元素大于/等于堆顶元素，不做操作
    由于堆的大小是 K，空间复杂度是O(K)，时间复杂度是O(NlogK)。
  作者：xin-tan
  链接：https://leetcode-cn.com/problems/zui-xiao-de-kge-shu-lcof/solution/chao-quan-3chong-jie-fa-zhi-jie-pai-xu-zui-da-dui-/
*/
function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

class MaxHeap {
  constructor(arr = []) {
    this.container = [];
    if(array.isArray(arr)) {
      arr.forEach(this.insert.bind(this))
    }
  }

  insert(data) {
    const { container } = this;   //解构
    container.push(data);
    let index = container.length - 1
    while(index) {
      let parent =  Math.floor((index-1) / 2)
      if(container[index] <= container[parent]){
        break
      }
      swap(container, index, parent)
      index = parent
    }
  }

  extract() {
    const { container } = this;
    if(!container.length){
      return null
    }
    swap(container, 0, container.length-1)
    const res = container.pop()
    let index = 0
        exchange = index * 2 + 1

    while(exchange < length) {
      // 如果有右节点，并且右节点的值大于左节点的值
      let right = index * 2 + 2;
      if (right < length && container[right] > container[exchange]) {
        exchange = right;
    }
    if (container[exchange] <= container[index]) {
        break;
    }
    swap(container, exchange, index);
    index = exchange;
    exchange = index * 2 + 1;
    }
    return res;
  }

  top() {
    if (this.container.length) return this.container[0];
    return null;
  }
}

var getLeastNumbers = function(arr, k) {
  const length = arr.length
  if(k >= length) return arr;

  const heap = new MaxHeap(arr, slice(0,k));    //创建一个堆
  for(let i = k; i < arr.length; i++) {
    if(heap.top() > arr[i]) {
      heap.extract()
      heap.insert(arr[i])
    }
  }
  return heap.container
}