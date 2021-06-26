// 725题  输入: 
// root = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3
// 输出: [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]

var splitListToParts = function(root, k) {
  let cur = head, n = 0;
  while(cur) {
    n++;
    cur = cur.next;
  }
  let arrLen = Math.floor(n/k);
  let remain = n % k;
  let arr = [];
  cur = head;
  for(let i = 0; i < k; i++) {
    arr[i] = cur;
    let addLen = remain > i ? 1 : 0;
    let arrLenI = arrLen + addLen;
    while(arrLenI > 1) {
      cur = cur.next;
      arrLenI--;
    }
    if(cur) {
      let tmp = cur.next;
      cur.next = null;
      cur = tmp;
    }
  }
  return arr;
}