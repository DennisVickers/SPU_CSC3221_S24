class Person {
  constructor(fn,ln) {
    this.firstName = fn;
    this.lastName = ln;
  }

  greeting() {
    return `Hello. My name is ${this.firstName} ${this.lastName}.`;
  }
}

class Professor extends Person {
  constructor(fn,ln,dept) {
    super(fn,ln);  // Calls the parent class constructor
    this.dept = dept;
  }
  greeting() {
    return `Hello. My name is ${this.firstName} ${this.lastName}.\nI teach in the ${this.dept} department.`;
  }
}

// Show how I can use greeting from the parent class
// commenting out greeting() in Professor and console logging

class Student extends Person {
  constructor(fn,ln,yr) {
    super(fn,ln);
    this.year = yr;
  }
  greeting() {
    return `Hello. My name is ${this.firstName} ${this.lastName}.\nI am a ${this.year} at SPU.`;
  }
}

const p1 = new Professor("Dennis","Vickers","Computer Science");
const s1 = new Student("Jasmine","Miller","Junior");

console.log(p1.greeting());
console.log(s1.greeting());
console.log(p1);
console.log(s1);
