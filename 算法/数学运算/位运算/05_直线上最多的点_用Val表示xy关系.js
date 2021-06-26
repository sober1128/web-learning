// 我自己编的---x y 的关系？
var maxPoints = function(points) {
  let conut = 0; map = new Map();
  let max = Number.MAX_SAFE_INTEGER;
  for(let i = 0; i < points.length-1; i++) {
    for(let j = i+1; j < points.length; j++) {
      let x1 = points[i][0], y1 = points[i][1];
      let x2 = points[j][0], y2 = points[j][1];
      if(y1 == y2) {
        map.has(0) ? map.set(0,map.get(0)++) : map.set(0,1);    //斜率为0
      } else if(x1 == x2) {
        map.has(max) ? map.set(max,map.get(max)++) : map.set(max,1);    //斜率为无穷大---也不太OK？
      } else {
        let k = (y2-y1) / (x2-x1);    // 浮点数的问题！
        map.has(k) ? map.set(k,map.get(k)++) : map.set(k,1);    //斜率为k
      }
    }
    for(let k in map) {   // 这里也有问题  key value
      if(map[k] > count) {
        count = map[k];
      }
    }
  }
  return count+1;
}; 

var maxPoints = function(points) {
  let count = 0; 
  // const map = new Map();   // 不应该一开始定义
  const n = points.length;
  if(n <= 2) return n;
  const gcd = (a,b) => {
    return b != 0 ? gcd(b, a%b) : a;
  }
  for(let i = 0; i < n; i++) {
    if(count >= n-i || count > n/2) {
      break;
    }
    const map = new Map();
    for(let j= i+1; j < n; j++) {
      let x = points[i][0] - points[j][0];
      let y = points[i][1] - points[j][1];
      if(x == 0) {
        y = 1;
      } else if (y == 0) {
        x = 1;
      } else {
        if(y < 0) {
          x = -x;
          y = -y;  
        }
        const gcdXY = gcd(Math.abs(x), Math.abs(y));
        x = x/gcdXY;
        y = y/gcdXY;
      }
      const key = y + x * 200000;
      map.set(key, (map.get(key) || 0) + 1);
    }
    for(const num of map.values()) {
      count = Math.max(count, num+1);
    }
  }
  return count;
}; 