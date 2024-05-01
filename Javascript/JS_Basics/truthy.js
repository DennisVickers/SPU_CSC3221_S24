let v1;
let v2;
let result;

// Falsy
v1 = false;
v1 = -0;
v1 = "";
v1 = null;
v1 = undefined;
v1 = NaN;

// Truthy
v1 = true;
v1 = -1;
v1 = "hello";
v1 = [];
v1 = {};
v1 = (Function());
/* Single value expression evaluation */
result = (v1) ? `${v1} is Truthy` : `${v1} is Falsy`;
console.log(result);

/* Loose comparisons
Rules:
- false, zero and empty strings are all equivalent.
- null and undefined are equivalent to themselves and each other but nothing else.
- NaN is not equivalent to anything — including another NaN!
- Infinity is truthy — but cannot be compared to true or false!
- An empty array is truthy — yet comparing with true is false and comparing with false is true?!
*/
// All true
// result = (0 == false);
// result = ("" == 0);
// result = (null == undefined);
// result = ([] == false);

// all false
// result = (null == false);
// result = (NaN == NaN);
// result = ([] == true);

// both true and false
// result = (Infinity == true);

/* Precautions
1. Avoid direct comparisons.
2. Use === strict equality whenever possible.
3. Convert to real Boolean values where necessary.
*/

// 1
// let x = [];
// result = (x == false);
// result = (!x);

// 2
// result = (x === false);

// 3
// result = (Boolean(x) === false);

// console.log(result);