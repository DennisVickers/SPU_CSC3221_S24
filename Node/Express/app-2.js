/*
 * Express Middleware App
 */
const express = require("express");
const app = express();

// Middleware function to log request details
const requestLogger = (req, res, next) => {
  console.log(`${req.method} request for '${req.path}'`);
  next(); // Pass control to the next middleware function
}

// Middleware function to check for admin 
// and bypass the remaining middleware
const checkId = (req, res, next) => {
  let qId = req.query.id;
  if (qId === undefined || qId == "1") {
    next();
  } else {
    res.status(400).send(`Bad Query. ${qId}`);
  }
};

// Register the middleware
app.use(requestLogger);
app.use(checkId);

// Define a route
app.get("/", (req,res) => {
  res.send("Hello Class!");
});

// Start the server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});