const fs = require("fs");

fs.unlink('output.txt', (err) => {
  if (err) {
    console.error('Error deleting the file:', err);
    return;
  }
  console.log('File deleted successfully.');
});
