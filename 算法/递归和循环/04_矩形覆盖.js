// 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？

// 假设有8个块

// 第1块竖着放，后面还剩7块，共f(7)种方法。

// 第1块横着放，后面还剩6块，共f(6)种方法。

// 即f(8)=f(6)+f(7)

// f(n)=f(n-1)+f(n-2)

function rectCover(n)
{
    if(n<=2){
        return n;
    }
    let i = 2;
    let pre = 1;
    let current = 2;
    let result = 0;
    while(i++ < n){
        result = pre + current;
        pre = current;
        current = result;
    }
    return result;
}