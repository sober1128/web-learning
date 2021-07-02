// var name = 'jackson';
// function baz(){
//   console.log("baz");
//   bar();
// }
// function bar(){
//   console.log("bar");
//   foo();
// }
// function foo(){
//   console.log("foo");
// }
// baz();

// function Person(name, age, job){
//   this.name = name;
//   this.age = age;
//   this.job = job;
//   this.sayName = function(){
//     console.log(this.name)
//   }
// }

// let person1 = new Person("bob",20,"Student");
// let person2 = new Person("Jack", 36, "Doctor");

// person1.sayName();
// console.log(person1.age);
// person2.sayName();
// console.log(person2.job)

// var a = 11;
// function foo(){
//   console.log(this.a);
// }
// const obj = {
//   a: 28
// }
// foo();
// foo.call(obj);

// Function.prototype.call = function(context, args1, args2, args3 ...);
// Function.prototype.apply = function(context, [args1, args2, args3 ...]);

// function foo(num) {
//   console.log(this.a, num);
//   return this.a + num;
// }
// const obj = {
//   a: 11
// };
// const bar = foo.bind(obj);
// console.log(bar())
// const b = bar(28);    // 11 28
// // console.log(b);       // 39

var a = 1128;
function foo() {
  console.log(this.a);
}
foo();
// const obj1 = {
//   a: 11,
//   foo: foo
// }
// const obj2 = {
//   a :28,
//   foo: foo
// }
// obj1.foo();   //11
// obj2.foo();   //28