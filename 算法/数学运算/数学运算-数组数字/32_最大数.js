var largestNumber = function(nums) {
  // 比较 ab 与 ba的大小，按降序排列；再将数组转化为字符串。
  nums.sort((a,b) => (b + '' + a) - (a + '' +b));
  if(nums[0] === 0) return '0';
  return nums.join('');
}

var largestNumber = function(nums) {
  nums.sort((x,y)=>{
      let sx=10
      let sy=10
      // xy拼接 需要在高位的基础上*10 才能相加 2 10 2*10*10 +10 
      while(sx<=x){
          sx*=10
      }
     while(sy<=y){
          sy*=10
      }
      // 可以看看sort函数定义===> 比较函数
      // 通常数字排序是用比较a b值大小
      // 换个思维 假设比较方式是(sy*x+y)-(sx*y+x)这种决定呢
      // a-b a就是xy b就是yx b-a是降序
      return (sx * y + x) - ( (sy * x + y))
  })
  if(nums[0]===0){
      return '0'
  }
  return nums.join('')
};
