/*
* Dates
*/

let v;

const today = new Date();
let yesterday = new Date("Oct 3, 2023");
yesterday = new Date("10/3/2023");

v = today;
v = yesterday;

// v = today.getMonth();    // Month of year (0..11)
// v = today.getDay(); // Day of week (0..6)
// v = today.getFullYear();
// v = today.getHours(); // Hours of Date object in 24
// v = today.getMinutes();
// v = today.getSeconds();
// v = today.getMilliseconds();
// v = today.getTime();  // Milliseconds since 1/1/1970 UTC (epoch)

// v = yesterday;
// v.setMonth(4);
// v.setDate(1);
// v.setFullYear(2013);

console.log(v);
