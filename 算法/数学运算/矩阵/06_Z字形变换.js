// 按行排序
var convert = function(s, numRows) {
  if(numRows == 1) return s;
  const len = Math.min(s.length, numRows);      //表示Z字图案的非空行
  // const len = numRows;
  const rows = [];
  for(let i = 0; i < len; i++) {
    rows[i] = "";
  }
  let col = 0, down = false

  for(const c of s) {
    rows[col] += c;
    if(col == 0 || col == numRows-1) {
      down = !down
    }
    col += down ? 1 : -1;
  }

  let res = "";
  for(const row of rows) {
    res += row;
  }

  return res;
}

// 规律
var convert = function(s, numRows) {
  if(numRows == 1) return s;
  let step = 2 * numRows - 2;  // 间距
  let index = 0;    // 记录s的下标
  let len = s.length,  add = 0; //add记录真实间距
  let ans = "";
  for(let i = 0; i < numRows; i++) {    //i表示行号
    index = i;
    add = i * 2;
    while(index < len) {    // 超出字符串长度计算下一层
      ans += s[index];
      add = step - add; //第一次间距是step-2*i, 第二次是2*i;
      index += (i == 0 || i == numRows-1) ? step : add;   // 0行和最后一行使用step间距，其余使用add间距
    }
  }
  return ans;
}