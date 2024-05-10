const books=[
  {title: "Book 1", body:"This is Book 1"},
  {title: "Book 2", body:"This is Book 2"}
]

function GetBooks() {
  let output = "";
  books.forEach((book) => {
    output += `<li>${book.title}</li>`;
  });
  document.body.innerHTML = output;
}

function CreateBook(newBook) {
  const p = new Promise((resolve,reject) => {
    setTimeout(() => {
      books.push(newBook);
      if (true) {
        resolve();
      } else {
        reject("Error: I reject your promise!")
      }
    }, 1000);
  });

  return p;    
}

async function DoItAll() {
  const newBook = {title: "Book 3", body:"This is Book 3"};
  
  await CreateBook(newBook);

  GetBooks();
}

DoItAll();
