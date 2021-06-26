//  1266
var minTimeToVisitAllPoints = function(points) {
  let count = 0;
  for(let i= 1; i < points.length; i++) {
    let disX = Math.abs(points[i][0] - points[i-1][0]);
    let disY = Math.abs(points[i][1] - points[i-1][1]);
    count += Math.max(disX, disY);
  }
  return count;
}