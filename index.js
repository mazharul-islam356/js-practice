// put on any varibale
// const sayHello = function() {
//   console.log("hello");
// };

// sayHello();

// assining

// function greet() {
//   console.log("hi");
// }

// const another = greet;

// another();

// higher order function

// as a parameter

// function greetUser(name, callback) {
//   console.log("hello", name);
//   callback();
// }

// function sayBye() {
//   console.log("bye");
// }

// greetUser("mazhar", sayBye);

// as a return

// function multiplier(x) {
//   return function(y) {
//     return x * y;
//   };
// }

// const double = multiplier(2);
// console.log(double(5));

// function proccessUser(callback) {
//   const name = "mazhar";
//   callback(name);
// }

// proccessUser(function(name) {
//   console.log("user " + name);
// });

const num = [7, 14, 5, 3, 78, 90];

// even
// double
// sum

const result = num
  .filter((num) => num % 2 === 0)
  .map((num) => num * 2)
  .reduce((acc, curr) => acc + curr, 0);
console.log(result);
