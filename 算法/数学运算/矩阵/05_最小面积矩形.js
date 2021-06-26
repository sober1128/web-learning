// 939题  https://leetcode-cn.com/problems/minimum-area-rectangle/
var minAreaRect = function(points) {
  let map = new Map();

  //将每个点存入map
  points.forEach(element => {
    map.set(element[0] + ',' + element[1], true);
  });

  let len = points.length;
      area =  Infinity;

  // 枚举每个点作为对角线
  for(let i = 0; i < len - 1; i++) {
    for(let j = i+1; j < len; j++) {
      let leftup = points[i],
          rightdown = points[j];
      // 判断两点十是否在同一条线上
      if(leftup[0] !== rightdown[0] && leftup[1] !== rightdown[1]) {
        // 判断点中是否存在另一条对角线的两点------判断注意
        if(map.get(leftup[0] + ',' + rightdown[1]) && map.get(rightdown[0]+","+leftup[1])) {
          let cur = Math.abs(leftup[0] - rightdown[0]) * Math.abs(leftup[1] - rightdown[1])
          area = Math.min(area, cur)
        }
      }
    }
  }
  return area = area != Infinity ? area : 0;
}
