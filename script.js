// Data
class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = 0,
    isRead = false
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
  }
}

class Library {
  constructor() {
    this.myLibrary = [];
  }

  addBookToLibrary(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.myLibrary.push(newBook);
    }
  }

  removeBookFromLibrary(title) {
    this.myLibrary = this.myLibrary.filter((book) => book.title !== title);
  }

  getBook(title) {
    return this.myLibrary.find((book) => book.title === title);
  }

  isInLibrary(newBook) {
    return this.myLibrary.some((book) => book.title === newBook.title);
  }
}

const library = new Library();

// Retrieve book from input
const getBookFromInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;
  return new Book(title, author, pages, isRead);
};

const bookInfo = document.getElementById("submitBookInfo");
bookInfo.onclick = () => {
  addBook();
};

const addBook = () => {
  const newBook = getBookFromInput();
  if (library.isInLibrary(newBook)) {
    alert("This book already exists in your library.");
    return;
  } else {
    library.addBookToLibrary(newBook);
    addBookCards(newBook);
  }
  closeModal();
};

const bookContainerGrid = document.getElementById("bookContainerGrid");
let isReadBtn = null;

const addBookCards = (newBook) => {
  const newDiv = document.createElement("div");
  newDiv.id = "bookCard";
  bookContainerGrid.appendChild(newDiv);

  const titleDiv = document.createElement("div");
  titleDiv.appendChild(document.createTextNode(newBook.title));

  const authorDiv = document.createElement("div");
  authorDiv.appendChild(document.createTextNode(newBook.author));

  const pagesDiv = document.createElement("div");
  pagesDiv.appendChild(document.createTextNode(newBook.pages + " pages"));

  const isReadButton = document.createElement("button");
  isReadButton.id = "isReadBtn";
  newBook.isRead
    ? (isReadButton.className = "isReadBtnGreen")
    : (isReadButton.className = "isReadBtnRed");

  isReadButton.className == "isReadBtnGreen"
    ? isReadButton.appendChild(document.createTextNode("Read"))
    : isReadButton.appendChild(document.createTextNode("Not Read"));

  isReadBtn = document.getElementById("isReadBtn");
  console.log("isreadbtn", isReadBtn);

  newDiv.appendChild(titleDiv);
  newDiv.appendChild(authorDiv);
  newDiv.appendChild(pagesDiv);
  newDiv.appendChild(isReadButton);
};

// UI
const addBookBtn = document.getElementById("add-book-btn");
const modal = document.getElementById("addBookModal");

addBookBtn.onclick = () => {
  modal.style.display = "block";
};

// When user clicks anywhere outside modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    closeModal();
  }
};

const closeModal = () => {
  modal.style.display = "none";
};

if (isReadBtn) {
  isReadBtn.onclick = () => {
    console.log("clicked");
    isReadBtn.className === "isReadBtnGreen"
      ? (isReadBtn.className = "isReadBtnRed")
      : (isReadBtn.className = "isReadBtnGreen");
  };
}
