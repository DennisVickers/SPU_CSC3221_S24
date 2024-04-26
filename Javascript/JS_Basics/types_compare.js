/* Variables
 * Defining variables: var, let, const.
 * must be declared before they can be used.
 * If they are not, they become a Global Property
 * on the Window object.
 */
// var v1 = 1;  // Global scope and can be re-declared. Do not use.
// let v2 = "Hello"; // block scoped
// const v3 = "Professor";

// console.log(v2 + " " + v3);
// console.log(`${v2} ${v3}`);

/* Data Types
 * Dynamically typed.
 * Will figure out the type by the value.
*/

// let dt;      // Undefined:
// dt = null;   // Null
// dt = true;   // Boolean
// dt = 10;  // Number: Any number
// dt = 100n;   //	Bigint
// dt = "What's this?";  // String
// dt = Symbol();
/* Everything else is an object */
// dt = ["Dodgers", "Mariners", "Giants"];  // Array

/* Object: Collection of key and value pairs. */
// dt = {dept:"CSC", IDNum:"3221", Prof:"Vickers"};

/* Display the data type */
// console.log(`Datetype: ${typeof(dt)}`);

/* Relational operators 
 *	Greater/less than: a > b, a < b.
 *	Greater/less than or equals: a >= b, a <= b.
 */

/* Equality operators
 *	Equals: a == b, not assignment.
 *	Not equals: a != b
 *	Strings are compared letter by letter. Something is greater than nothing.
 *	Strict equality means types and values must be the same.
 */

console.log("<< comparison >>");
let left, right;
left = 10;
right = 20;

console.log(left == right);
console.log(left != right);

right = "10"
console.log(`loosely: ${left == right}`);
console.log(`strictly: ${left === right}`);
