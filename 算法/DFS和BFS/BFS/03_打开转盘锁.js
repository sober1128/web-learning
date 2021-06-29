// 打开转盘锁

var openLock = function (deadends, target) {
  let step = 0;
  const deadSet = new Set();
  const visitedSet = new Set();

  for(const dead of deadends) {
    deadSet.add(dead);
  }

  const q = ['0000']; //维护一个队列，逐个考察这一层的所有 “节点”，安排它们的邻接点入列

  while(q.length) {
    const size = q.length;
    for(let i = 0; i < size; i++) {
      const node = q.shift();
      if(node == target) {
        return step;
      }
      if(visitedSet.has(node) || deadSet.has(node)) {
        continue;
      }
      visitedSet.add(node);

      for(let j = 0; j < node.length; j++) {
        const num = node[j] - '0';
        const up = (num+1) % 10;
        const down = (num+9) % 10;
        q.push(node.substring(0,j) + up + node.substring(j+1));
        q.push(node.substring(0,j) + down + node.substring(j+1));
      }
    }
    step++;
  }
  return -1;
}

