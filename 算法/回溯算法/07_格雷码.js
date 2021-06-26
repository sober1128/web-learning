// 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。

// 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。即使有多个不同答案，你也只需要返回其中一种。

// 格雷编码序列必须以 0 开头。

// 代码用的递推，可以优化空间复杂度，ans表示n - 1的元素，求n位元素的话就可以应用我上面说的镜像求法，pre用来表示2的n - 1次方，每轮乘2就可以即pre<<=1，用位运算速度会比用*2快一些

// 作者：avery_
// 链接：https://leetcode-cn.com/problems/gray-code/solution/jing-xiang-head-by-avery_/

var grayCode = (n) => {
  let ans = [0];
  let pre = 1;
  for(let i = 0; i < n; i++) {
    for(let j = ans.length - 1; j >= 0; j--) {
      ans.push(pre + ans[j]);
    }
    pre = pre << 1;
  }
  return ans;
}

console.log(grayCode(3));