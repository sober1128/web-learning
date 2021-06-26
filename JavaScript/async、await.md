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
