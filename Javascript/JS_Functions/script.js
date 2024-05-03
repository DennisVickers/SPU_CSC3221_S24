/*
// Declared functions
function sum1(p1,p2,p3,p4=4) {
  let total = 0;
  total = p1 + p2 + p3 + p4;
  return total;
}

// Parameters
function sum2(...p) {
  let total = 0;
  for (let i = 0; i < p.length; i++) {
    total += p[i];
}
return total;
}

function sum3() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
      total += arguments[i];
  }
  return total;
}

console.log(sum1(1, 2, 3));
console.log(sum2(10, 20, 30, 40));
console.log(sum2(100, 200, 300, 400));

// objects by reference
function reassignObject(ar) {
  ar[0] = 5;
}
// function reassignObject(ar) {
//   ar = [10,20,30];
// }
let ar = [1,2,3];
reassignObject(ar);
console.log(ar.toString());

// Function expressions
// Anonymous
const cube = function (x) {
  x = x * x * x;
  return x;
}
console.log(cube(3));
console.log(cube.name);

// Named
const factorial = function fac(n) {
  if (n <= 1) {
    return 1;
  }
  return n * fac(n - 1);
};
console.log(factorial(5)); // 120
console.log(factorial.name);

// Arrow functions
// Traditional function expression
const doubleTraditional = function(number) {
  return number * 2;
};

console.log(doubleTraditional(5)); // Output: 10

// Equivalent arrow function
const doubleArrow = number => number * 2;

console.log(doubleArrow(5)); // Output: 10


// Scope
// Global Scope
var globalVar = "I am global";

function exampleFunction() {
  // Local Scope
  var localVar = "I am local";
  
  if (true) {
    // Block Scope
    let blockVar = "I am block-scoped";
    console.log(blockVar); // "I am block-scoped"
    console.log(localVar); // "I am local"
    console.log(globalVar); // "I am global"
  }
  
  console.log(localVar); // "I am local"
  console.log(globalVar); // "I am global"
  // console.log(blockVar); // ReferenceError: blockVar is not defined
}

console.log(globalVar); // "I am global"
// console.log(localVar); // ReferenceError: localVar is not defined
// console.log(blockVar); // ReferenceError: blockVar is not defined

exampleFunction();


// Closures
function createCounter() {
  let count = 0;
  
  return function() {
    count += 1;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// IIFE
(() => {
  console.log("IIFE ran!!!");
})();

// With parameters
let var1="Dennis";
((fn) => {
  console.log(`Hi ${fn}`);
})(var1);


// Higher-order function
function applyOperation(a, b, operation) {
  return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(applyOperation(3, 4, add)); // 7
console.log(applyOperation(3, 4, multiply)); // 12

// Higher order return function
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // Output: 10
console.log(triple(5)); // Output: 15

*/