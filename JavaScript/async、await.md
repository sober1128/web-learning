# async/await
  `async`是`ES7`的与异步操作有关的关键字，其返回一个`Promise`对象，`await`操作符用于等待一个`Promise`对象，它只能在异步函数`async function`内部使用。`async/await`的目的是简化使用多个`promie`时的同步行为，并对一组`Promise`执行某些操作。

  ## asnyc

  ### 语法
  ```javascript
    async function name([param[, param[, ... param]]]) { statements }
  ```

  * `name`: 函数名称。
  * `param`: 要传递给函数的参数的名称。
  * `statements`: 函数体语句。

`async`函数返回一个`Promise`对象，可以使用`then`方法添加回调函数，返回的`Promise`对象会运行`resolve`异步函数的返回结果，如果抛出异常则运行拒绝`reject`。

### 实例
```javascript
async function asyncPromise(v) {
  return v;
}
asyncPromise(l).then((v) => {
  console.log(v);
}).catch((e) => {
  console.log(e);
})
```
## await

```javascript
setTimeout(function(){     
    console.log('1');   
},0)   
async function async1(){    
    console.log('4');    
    await async2();    
    console.log('6');   
}   
async function async2(){    
    console.log('5');   
}   
async1();   
new Promise(function(resolve,reject){    
    console.log('2');    
    resolve();   
}).then(function(e2){    
    console.log('h');   
})   
console.log('3');  


console.log("1");
async function async1() {
  await async2();
  console.log("2");
}
async function async2() {
  console.log("3");
}
async1();
setTimeout(function () {
  console.log("4");
}, 0);
new Promise(resolve => {
  console.log("5");
  resolve();
})
  .then(function () {
    console.log("6");
  })
  .then(function () {
    console.log("7");
  });
console.log("8");


// setTimeout1
setTimeout(() => {
  console.log(1)

  new Promise((resolve) => {
    resolve()
  // Promise1
  }).then(() => {
    console.log(2)
  });
})
```
