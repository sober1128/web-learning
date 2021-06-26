/*贪心算法
1.把所有会议按照结束时间排序，我们优先参加早结束的会议
2.由于一天只能参加一个会议，所以使用一个 哈希(数组也可以) 记录我们
  使用过的天
3.参加每一个会议时，优先使用比较早的天来参加
*/

var maxEvents = function(events) {
  let count = 0, res = []
  events.sort((a,b) => a[1] - b[1])   //按结束时间升序排序
  let len = events.length
  for(let i = 0; i < len; i++) {
    let [start, end] = events[i]
    for(let j = start; j <= end; j++) {
      if(had[j]  === undefined) {
        had[i] = 1
        count++
        break
      }
    }
  }
  return count;
}