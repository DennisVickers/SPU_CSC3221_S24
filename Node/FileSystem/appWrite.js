const fs = require("fs");

fs.writeFile('output.txt', 'Hello, World!', (err) => {
  if (err) {
    console.error('Error writing to the file:', err);
    return;
  }
  console.log('File written successfully.');
});