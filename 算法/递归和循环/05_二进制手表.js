var readBinaryWatch = function(num) {
  const time = [1,2,4,8,1,2,4,8,16,32]
  let hour = 0, min = 0;
  let res = []
  const dfs = (num, hour, min, index) => {
    // 递归出口 
    if(num === 0) {
      res.push(hour + ':' + (min < 10 ? '0'+min : min))
    }
    let i = index;
    while(i < 10) {
      if(i <= 3 && hour + time[i] < 12) {
        // 小时
        dfs(num-1, hour + time[i], min, i+1)
      }
      if(i > 3 && min + time[i] < 60) {
        dfs(num-1, hour, min + time[i], i+1)
      }
      i++;
    }
  }
  dfs(num, hour, min, 0)
  return res;
}