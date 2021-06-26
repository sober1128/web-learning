// 计数排序的核心在于把输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。

function countSort(array, maxValue) {
  const countArr = new Array(maxValue+1);
  let sortedIndex = 0;
  var arrLen = arr.length;
    var countArrLen = maxValue+1;
    for(var i=0; i<arrLen; i++){
        if(!countArr[arr[i]]){
            countArr[arr[i]] = 0;
        }
        countArr[arr[i]]++;
    }
    for(var j=0; j<countArrLen; j++){
        while(countArr[j]>0){
            arr[sortedIndex++]=j;
            countArr[j]--;
        }
    }
    return arr;
}

// 测试
var arr = [6,2,22,45,1,6,8,200,56,111];
console.log(countSort(arr,200).join(','));