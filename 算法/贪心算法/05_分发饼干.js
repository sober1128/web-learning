var findContentChildren = function(g, s) {
  g.sort((a,b) => a - b)    //升序排列
  s.sort((a,b) => a - b)
  let num = 0, cookie = 0, child = 0
  while(cookie < s.length && child < g.length) {
    if(g[child] <= s[cookie]) {
      num += 1
      child += 1
    }
    cookie += 1
  }
  return num
}