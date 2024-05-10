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

const newBook = {title: "Book 3", body:"This is Book 3"};
CreateBook(newBook)
  .then(GetBooks)
  .catch(err => console.log(err));


let showAll = true;
if (showAll) {
  const promise1 = Promise.resolve("Good morning");
  const promise2 = "Good afternoon";
  const promise3 = new Promise((rsv,rej) => 
    setTimeout(rsv,2000,"Good night")
    );
  Promise.all([promise1,promise2,promise3]).then(values => console.log(values));
}