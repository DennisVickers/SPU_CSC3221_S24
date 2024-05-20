// Import the http module
const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 5500;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send the response body
  res.end('Hello, World!\n');

  // switch (req.url) {
  //   case "/": 
  //     res.writeHead(200, {'Content-Type': 'text/plain'});
  //     res.write("Home page");
  //     res.end();
  //     break;
  //   case "/about": 
  //     res.writeHead(200, {'Content-Type': 'text/plain'});
  //     res.write("About page");
  //     res.end();
  //     break;
  //   default:
  //     res.writeHead(404, {'Content-Type': 'text/plain'});
  //     res.write("Page not found.");
  //     res.end();
  // }
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
