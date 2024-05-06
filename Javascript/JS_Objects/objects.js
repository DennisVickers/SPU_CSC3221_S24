// Create an object literal
// const dennis = {
//   firstName: "Dennis",
//   lastName: "Vickers",
//   imA: "Professor"
// }
// console.log(dennis);

// Fine for one offs but to replicate it,
// create a constructor function
function Person(fname,lname,role) {
  this.fName = fname;
  this.lName = lname;
  this.imA = role;
  this.greeting = function() {
    return (`Hello ${this.imA} ${this.lName}`);
  }
}

const me = new Person("Dennis","Vickers","Professor");
console.log(me.greeting());
console.log(me);

// Add a new property
me.Children = ["Travis","Scott","Tyler"];
console.log(me);

// Problem. New objects don't include the Children property
const spouse = new Person("Wendy", "Vickers", "Investigator");
console.log(spouse);

// Check out new object including prototype

// Add a method to the prototype
Person.prototype.parting = function() {
  return (`Goodbye ${this.imA} ${this.lName}`);
};
Person.prototype.Parents;
me.Parents = ["Lee","Nancy"];
spouse.Parents = ["Bert","Nancy"];
console.log(me.Parents);
console.log(spouse.Parents);

// Inheritence
// Create a new constructor
function sibling(firstName,relationship) {
  Person.call(this, firstName);
  this.relationship = relationship;
}

// // Inherit the prototype
sibling.prototype = Object.create(Person.prototype);
sibling.prototype.constructor = sibling;

const brother = new sibling("David","Brother");
console.log(brother);
console.log(brother.fName);
