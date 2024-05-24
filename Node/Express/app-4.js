/*
 * Express Middleware App
 * with static site
 */
const express = require("express");
const path = require("path");   // Add the path module
const app = express();

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

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

// Middleware to handle errors
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
};

// Register the middleware
app.use(requestLogger);
app.use(checkId);

// Define a route
app.get("/", (req,res) => {
  res.send("Hello Class!");
});

app.post('/submit', (req, res) => {
  res.send('Post request!');
});

app.put('/submit', (req, res) => {
  res.send('Put request!');
});

app.delete('/submit', (req, res) => {
  res.send('Delete request!');
});

// Use the error handling middleware
app.use(errorHandler);

// Start the server
const PORT = 5500;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});