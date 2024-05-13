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
function CreateBook(newBook) {
  const p = new Promise((resolve,reject) => {
    setTimeout(() => {
      books.push(newBook);
      let err = false;
      if (!err) {
        resolve("I accept your promise!");
      } else {
        reject("Error: I reject your promise!");
      }
    }, 0);
  });

  return p;
}

// Create a new book object
const newBook = {title:"Book 3", body:"This is Book 3"};

async function UpdatePage() {
  console.log("Defined");
  // Add the new book object to the array
  await CreateBook(newBook);

  GetBooks();
}

UpdatePage();

// Immediately Involked Function Expression (IIFE)
// (async () => {
//   console.log("IIFE");
//   await CreateBook(newBook);
//   GetBooks();
// })();
