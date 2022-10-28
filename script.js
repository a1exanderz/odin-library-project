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

// Create book card
const createBookCard = () => {};

// Retrieve book from input
const getBookFromInput = () => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const isRead = document.getElementById("isRead").checked;

  return new Book(title, author, pages, isRead);
};

const addBook = () => {
  const newBook = getBookFromInput();

  if (library.isInLibrary(newBook)) {
    console.log("book already exists");
    return;
  } else {
    library.addBookToLibrary(newBook);
    //update books grid
  }
  closeModal();
  console.log(library.myLibrary);
};

const bookInfo = document.getElementById("submitBookInfo");
bookInfo.onclick = () => {
  addBook();
};

// UI
const addBookBtn = document.getElementById("add-book-btn");
const modal = document.getElementById("addBookModal");

addBookBtn.onclick = () => {
  modal.style.display = "block";
};

// When user clicks anywhere outside modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

const closeModal = () => {
  modal.style.display = "none";
};
