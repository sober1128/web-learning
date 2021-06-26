// https://mp.weixin.qq.com/s?__biz=MzU0ODMyNDk0Mw==&mid=2247487218&idx=1&sn=a153b477b252a27ec1d3a2e6ef789fba&chksm=fb419dd2cc3614c476f41133fc70cad7eaffea3171c3f337cb74ed62c533f4e9f0f22c7dcbe8&token=1877388830&lang=zh_CN#rd

var add = function(a, b) {
  while(b != 0) {
    const exc1 = a ^ b
    const carry = (a & b) << 1
    a = exc1
    b = carry
  }
   return a;
};