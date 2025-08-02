const myLibrary=[];
Book.prototype.toggleRead = function() {
  this.read = !this.read;
};
const newBookBtn = document.getElementById("new-book-btn");
const newBookForm = document.getElementById("new-book-form");
const cancelBtn = document.getElementById("cancel-btn");

newBookBtn.addEventListener("click", () => {
  newBookForm.style.display = "block";
});

cancelBtn.addEventListener("click", () => {
  newBookForm.style.display = "none";
});

newBookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const author = document.getElementById("author").value.trim();
  const pages = Number(document.getElementById("pages").value);
  const read = document.getElementById("read").checked;

  addBookToLibrary(title, author, pages, read);
  displayBooks();

  newBookForm.style.display = "none";
  newBookForm.reset();
});


function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();

  this.info = function() {
    let readStatus = this.read ? "already read" : "not read yet";
    return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`;
  };
}

// Define prototype AFTER constructor
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}
function displayBooks() {
    const container = document.getElementById("library-container");
  container.innerHTML = ""; // clear previous books

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    // We’ll build the card here next
    const card = document.createElement("div");
card.classList.add("book-card");
card.setAttribute("data-id", book.id);

card.innerHTML = `
  <h3>${book.title}</h3>
  <p><strong>Author:</strong> ${book.author}</p>
  <p><strong>Pages:</strong> ${book.pages}</p>
  <p class="status ${book.read ? 'read' : 'not-read'}">${book.read ? 'Read' : 'Not Read Yet'}</p>
  <div class="button-group">
    <button class="toggle-read">Toggle Read</button>
    <button class="remove-book">Remove</button>
  </div>
`;


container.appendChild(card);
const removeBtn = card.querySelector(".remove-book");
removeBtn.addEventListener("click", () => {
  const bookId = card.getAttribute("data-id");
  const bookIndex = myLibrary.findIndex(book => book.id === bookId);
  if (bookIndex > -1) {
    myLibrary.splice(bookIndex, 1);
    displayBooks();
  }
});
const toggleBtn = card.querySelector(".toggle-read");
toggleBtn.addEventListener("click", () => {
  const bookId = card.getAttribute("data-id");
  const book = myLibrary.find(book => book.id === bookId);
  if (book) {
    book.toggleRead();
    displayBooks();
  }
});

  }
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("Transformer", "Michael Bay", 1, true);
displayBooks();
