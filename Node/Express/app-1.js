/*
 * Basic Express App
 */
const express = require("express");
const app = express();

// Define a simple route
app.get("/", (req,res) => {
  res.send("Hello Class!");
});

// Start the server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});