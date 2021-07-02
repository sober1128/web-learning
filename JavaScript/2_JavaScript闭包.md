# JavaScript闭包
函数和对其词法环境`lexical environment`的引用捆绑在一起构成闭包，也就是说，**闭包可以让你从内部函数访问外部函数作用域**。在`JavaScript`，函数在每次创建时生成闭包。在本质上，闭包是将函数内部和函数外部连接起来的桥梁。

## 定义闭包
定义一个闭包，函数内部嵌套一个函数。
```JavaScript
function student(){
    var name = "Ming";
    var sayMyName = function(){ // sayMyName作为内部函数，有权访问父级函数作用域student中的变量
        console.log(name);
    }
    console.dir(sayMyName); // ... [[Scopes]]: Scopes[2] 0: Closure (student) {name: "Ming"} 1: Global ...
    return sayMyName; // return是为了让外部能访问闭包，挂载到window对象也可以 
}
var stu = student(); 
stu(); // Ming
```
可以看到定义在函数内部的`name`变量并没有被销毁，我们仍然可以在外部使用函数访问这个局部变量，使用闭包，可以把局部变量驻留在内存中，从而避免使用全局变量。全局变量污染会导致应用程序不可预测性，每个模块都可调用必将引来灾难。

## 内存泄漏
内存泄露是指你用不到（访问不到）的变量，依然占据着内存空间，不能被再次利用起来。  
闭包引用的变量应该是需要使用的，不应该属于内存泄漏，但是在`IE8`浏览器中`JScript.dll`引擎使用会出现一些问题，造成内存泄漏。  
对于各种引擎闭包内存回收具体的表现参阅 [这篇文章](https://www.cnblogs.com/rubylouvre/p/3345294.html)

