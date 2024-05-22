const fs = require('fs').promises;

// Function to read a file
async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log('File content:', data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

// Function to write to a file
async function writeFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content, 'utf8');
    console.log('File written successfully');
  } catch (err) {
    console.error('Error writing to file:', err);
  }
}

// Function to append to a file
async function appendToFile(filePath, content) {
  try {
    await fs.appendFile(filePath, content, 'utf8');
    console.log('Content appended successfully');
  } catch (err) {
    console.error('Error appending to file:', err);
  }
}

// Example usage
(async () => {
  const filePath = './example.txt';

  // Write to the file
  await writeFile(filePath, 'Hello, World!\n');

  // Append to the file
  await appendToFile(filePath, 'Appending some text.\n');

  // Read the file
  await readFile(filePath);
})();
