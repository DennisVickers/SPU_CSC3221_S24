/* 
 * Branching 
*/
const v1 = 10;
let r;

/* If / if-else / if-else-if */
if (v1 === 10) {
  r = "True branch";
}

if (v1 === 20) {
  r = "True branch";
} else {
  r = "False branch";
}

if (v1 === "10") {
  r = "True branch";
} else if (v1 == "10") {
  r = "Truthy branch";
} else {
  r = "False branch";
}

/* ternary if */
r = (v1 === "10") ? "True Branch" : "False Branch";

/* Switch */
switch (new Date().getDay()) {  // Uses Strict Comparison
  case 0:    
    r = "Sunday";
    break;
  case 1:
    r = "Monday";
    break;
  case 2:
    r = "Tuesday";
    break;
  case 3:
    r = "Wednesday";
    break;
  case (Number("4")):  // Can be an expression also
    r = "Thursday";
    break;
  case 5:
    r = "Friday";
    break;
  case 6:
    r = "Saturday";
    break;
  default:
    r = "Day unknown";
}

/* Results */
console.log(r);