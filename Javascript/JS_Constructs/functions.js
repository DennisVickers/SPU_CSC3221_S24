/*
 * Functions
 */

/* Declared a functions */
function cube(x) {
  x = x * x * x;
  return x;
}
let r1 = cube(3);
console.log(r1);

/* Primative values are passed by value */
function cube(x) {
  x = (x * x * x);
  console.log(x);
}
let x = 3;
cube(x);
console.log(x);

/* Objects (including arrays) are passed by reference */
function refExample(o) {
  o.fn = "Eddie";
}
let person = {fn:"Dennis"};
console.log(person.fn);
refExample(person);
console.log(person.fn);

/* Default arguements */
function product(x=1, y=1) {
  return (x * y);
}
console.log(product(4));

/* Rest parameters */
function sum(...parms) {
  let total = 0;
  for (const parm of parms) {
    total += parm;
  }
  return total;
}
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));

/* FUNCTION EXPRESSIONS */
/* Anonymous */
const cube = function (x) {
  x = x * x * x;
  return x;
}
console.log(cube(3));

/* Named */
const cube = function namedCube(x) {
  x = x * x * x;
  return x;
}
console.log(cube(3));
console.log(cube.name);

/* Recursion with named function expression
 * Finonacci sequence: The next number is found by adding up the two numbers   * before it.
 */
const fib = function fibonacci(nth) {
  if (nth <= 1) return 1;
  return fibonacci(nth - 1) + fibonacci(nth - 2);
};
console.log(fib(5));

/* Closures */
function outerFunction() {
  let outerVariable = 'I am from outer function!';
  
  function innerFunction() {
    console.log(outerVariable); // innerFunction() has access to outerVariable
  }
  
  return innerFunction;
}

const myClosure = outerFunction();
myClosure();  // Output: 'I am from outer function!'

/* ARROW FUNCTIONS */
const cube = (x) => {
  return (x * x * x);
}
console.log(cube(2));

const cube = x => {
  return x * x * x;
}
console.log(cube(2));

// let cube = x => x*x*x;
x=2;
console.log((x => x*x*x));

/* IMMEDIATELY INVOKABLE FUNCTIONS EXPRESSION (IIFE) */
(() => {
  console.log("IIFE ran!!!");
})();

// With parameters
let var1="Dennis";
((fn) => {
  console.log(`Hi ${fn}`);
})(var1);
