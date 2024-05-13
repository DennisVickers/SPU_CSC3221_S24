// Setup book array
const books=[
  {title: "Book 1", body:"This is book 1"},
  {title: "Book 2", body:"This is book 2"}
]

// Clear page
let output = "";
document.body.innerHTML = output;

// Add the book array to the page
function GetBooks() {
  books.forEach((book) => {
    output += `<li>${book.title}</li>`
  });
  document.body.innerHTML = output;
}

// Function to add a book object to the array
function CreateBook(newBook) {
  // Note 'setTimeout is an async function
  setTimeout(() => books.push(newBook), 0);
}

// create a new book object
const newBook = {title: "Book 3", body:"This is book 3"}

// Add the new book object to the array
CreateBook(newBook);

// Show the book array on the page
GetBooks();

