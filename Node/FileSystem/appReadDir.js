const fs = require("fs");

fs.readdir('.', (err, files) => {
  if (err) {
    console.error('Error reading the directory:', err);
    return;
  }
  console.log('Directory contents:', files);
});
