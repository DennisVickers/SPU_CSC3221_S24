const books=[
  {title: "Book 1", body:"This is book 1"},
  {title: "Book 2", body:"This is book 2"}
]

function GetBooks() {
  let output = "";
  books.forEach((book) => {
    output += `<li>${book.title}</li>`
  });
  document.body.innerHTML = output;
}

function CreateBook(newBook) {
  setTimeout(() => {
    books.push(newBook);
  }, 2000);
}

const newBook = {title: "Book 3", body:"This is book 3"}

CreateBook(newBook);

GetBooks();

