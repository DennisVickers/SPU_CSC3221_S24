// Required modules
const express = require("express");
const {books} = require("./data/books");

// Create the app object
const app = express();

// Get home page
app.get("/", (req,res)=>{
  res.send("<h1>Home Page</h1><a href='/books'>Books</a>");
});

// Get all the books in the data set
app.get("/books", (req,res)=>{
  res.json(books);
})

// Get only the books that satisfy the search
// localhost:5000/books/qry?Title=T&limit=2
app.get("/books/qry", (req,res)=> {
  console.log(req.query);
  // Destructure the json object
  const {Title, limit} = req.query;
  // Use the spread operator to create the array
  let filteredBooks = [...books];  
  if (Title) {
    filteredBooks = filteredBooks.filter((b)=>{
      return b.Title.startsWith(Title);
    });
  }
  if (limit) {
    filteredBooks = filteredBooks.slice(0,Number(limit));
  };
  res.status(200).json(filteredBooks);
});

// Get the one book with an id that matches the parameter
// Note: because of the route names, this route but be last
// localhost:5000/books/2
app.get("/books/:pid", (req,res)=>{
  console.log(req.params);
  const {pid} = req.params;
  const oneBook = books.find((b) => b.id === pid);
  if (!oneBook){
    return res.status(404).send(`Books ${pid} not found in the database.`);
  }
  res.json(oneBook);
})

app.all("*", (req,res)=>{
  res.status(404).send("<h1>Page Not Found...</h1>");
});

// start listening
const appName = "Simple Site";
const port = 5000;
app.listen(port, ()=>{
  console.log(`${appName} is running on port ${port}`);
});