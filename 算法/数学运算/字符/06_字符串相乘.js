// 时间复杂度 O(n^2)
const multiply = (num1, num2) => {
  if(num1 === '0' || num2 === '0') return '0';
  const len1 = num1.length;
  const len2 = num2.length;
  const pos = new Array(len1+len2).fill(0);

  for(let i = len1-1; i >= 0; i--) {
    const n1 = +num1[i];    // 转成数字
    for(let j = len2-1; j >= 0; j--) {
      const n2 = +num2[j];
      const multi = n1 * n2;
      const sum = pos[i+j+1] + multi;

      pos[i+j+1] = sum % 10;
      pos[i+j] += sum/10 | 0;  // 十位保留取整，取整直接舍弃小数点，用0 |效率，高于parseInt
    }
  }
  while(pos[0] == 0) {
    pos.shift();
  }
  return pos.join('');
}

