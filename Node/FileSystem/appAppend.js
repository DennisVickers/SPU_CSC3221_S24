const fs = require("fs");

fs.appendFile('output.txt', '\nAppended Text.', (err) => {
  if (err) {
    console.error('Error appending to the file:', err);
    return;
  }
  console.log('File appended successfully.');
});