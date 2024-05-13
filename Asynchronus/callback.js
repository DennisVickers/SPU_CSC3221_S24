// Setup book array
const books=[
  {title: "Book 1", body:"This is Book 1"},
  {title: "Book 2", body:"This is Book 2"}
]

// Clear page
let output = "";
document.body.innerHTML = output;

// Add the book array to the page
function GetBooks() {
  books.forEach((book) => {
    output += `<li>${book.title}</li>`;
  });
  document.body.innerHTML = output;
}

// Function to add a book object to the array
function CreateBook(newBook, GetBooks) {
  // Note 'setTimeout is an async function
  setTimeout(() => {
    books.push(newBook);
    // Show the book array on the page as a callback
    GetBooks();
  }, 0);
}

// Function to add a book object to the array
const newBook = {title:"Book 3", body:"This is Book 3"};

// Add the new book object to the array
CreateBook(newBook, GetBooks);