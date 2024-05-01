/* 
 * Loops
 */

/* For loop */
for (let i=0; i < 10; i++) {
  console.log(`Index: ${i}`);
}

/* Each expression can do multiple things */
for (let i = 0, s=""; i < 10 && s != "0123" ; i++) {
  s += String(i);
  console.log(`Index: ${s}`);
}

/* Can be short circuited */
for (let i=0; i < 10; i++) {
  if (i === 2 || i===4) continue;
  if (i > 7) break;
  console.log(`Index: ${i}`);
}

/* While loop: One expression at beggining */
let i = 0;
while (i < 10) {
  console.log(`Index: ${i}`);
  i++;
};

/* Do loop: One expression at end */
let i=0;
do {
  console.log(`Index: ${i}`);
  i++;
} while (i < 10);

/* For Each: for arrays */
const NL_West = ["Dodgers","Giants","Padres","Diamondbacks","Rockies"];
NL_West.forEach(function(element){
  console.log(element);
});

/* Map function: creates a new array populated with
 * the results of calling a function on every element
 * in the calling array.
 */
const NL_West = [{id:"Dodgers"},{id:"Giants"},{id:"Padres"},{id:"Diamondbacks"},{id:"Rockies"}];
const ids = NL_West.map(function(team){
  return team.id;
});
console.log(ids);

/* For-In: Loops through the properties of an object */
const student = {
  firstName: "Alice",
  lastName: "Anderson",
  major: "CS",
  year: 3
}
for(const propName in student) {
  console.log(`Name: ${propName}, Value: ${student[propName]}`);
}