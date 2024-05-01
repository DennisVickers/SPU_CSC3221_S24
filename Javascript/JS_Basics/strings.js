/*
* Strings
*/

const fN = "Dennis";
const lN = "Vickers";
const grandKids = 6;

let v;

// Concatenating
v = fN + lN;
v = fN + " " + lN;
v = "Hello my name is " + fN + " " + lN;
v = fN.concat(" ", lN, ".");

// Escaping out
v = "That's cool, let's do it";
v = 'That\'s cool, let\'s do it';

// Template
v = `Hello, my name is ${fN} ${lN}.`;

// String functions
v = v.toUpperCase();
v = v.toLowerCase();

// String as an array of characters
v = fN[1];
v = fN.charAt(1);
v = fN.indexOf("n");
v = fN.lastIndexOf("n");
v = fN.lastIndexOf("z");

// parsing a string
v = fN.substring(0,3);  // (start, end)
v = fN.slice(0,3); // Used mostly on arrays
v = fN.slice(-3); // Used mostly on arrays

// Split into an array
v = `Hello, my name is ${fN} ${lN}`;
v = v.split(" ");

// Results
console.log(v);