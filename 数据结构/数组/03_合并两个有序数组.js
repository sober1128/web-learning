// 暴力---合并后排序
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length-m, ...nums2);
  nums1.sort((a, b) => a - b);
}

// 双指针遍历
var merge = function(nums1, m, nums2, n) {
  let i = 0, j = 0, index = 0;
  let arr = new Array(m+n-1).fill(0);
  while(i < m || j < n) {
    if(i === m) { arr[index++] = nums2[j++]; }
    else if(j === n) {  arr[index++] = nums1[i++]; }
    else if(nums1[i] <= nums2[j]) { arr[index++] = nums1[i++];  }
    else { arr[index++] = nums2[j++]; }
  }  
  for(let i = 0; i <= m+n-1; i++) {
    nums1[i] = arr[i];
  }
}

// 逆向双指针
var merge = function(nums1, m, nums2, n) {
  let i = m - 1, j = n - 1, k = m + n - 1;
  while (i >= 0 || j >= 0) {
    if(i < 0) nums1[k--] = nums2[j--];
    else if(j < 0) nums1[k--] = nums1[i--];
    else if(nums1[i] < nums2[j]) nums1[k--] = nums2[j--];
    else nums1[k--] = nums1[i--];
  }
  return nums1;
}