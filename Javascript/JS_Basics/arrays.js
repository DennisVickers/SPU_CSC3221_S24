/* 
* Arrays
*/
const a1 = [10,11,12,13,14];
const a2 = new Array(20,21,22,23,24);
const teams = ["Dodgers", "Braves", "Cardinals"];
const jumble1 = [33.3,"3221",true,23n];
const jumble2 = [["Dennis","Wendy"], {me:"Dennis",spouse:"Wendy"}];

let v;

v = a1;
// v = a2;
// v = teams;
// v = jumble1;
// v = typeof jumble1[3];
// v = jumble2;
// v = jumble2[0][1];
// v = jumble2[1].me;

// Mutating arrays
// v = teams;
// v.push("Mariners");   // Add to end
// v.unshift("Yankees"); // Add to start
// v.pop();  // Remove from the end
// v.shift();  // Remove from beginning
// v.splice(1,1); // Remove from the middle

console.log(v);
