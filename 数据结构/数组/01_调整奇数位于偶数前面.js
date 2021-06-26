const reOrderArray = (array) => {
  if(Array.isArray(array)) {
    let start = 0, end = array.length - 1
    while(start < end) {
      while(array[start] & 1 == 1) {
        start += 1
      }
      while(array[end] & 1 == 0) {
        end -= 1
      }
      if(start < end) {
        [array[start], array[end]] = [array[end], array[start]]
      }
    }
  }
  return array
}

const arr = [1,3,2,4,6,5,7,8]
console.log(reOrderArray(arr));