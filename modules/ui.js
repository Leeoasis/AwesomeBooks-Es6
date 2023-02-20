// UI Class: Displays listed Books
import Storage from './storage.js';
import Book from './bookClass.js';

export default class UI {
  static displayBooks() {
    const books = Storage.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-collection');
    const addedbook = document.createElement('div');
    addedbook.innerHTML = `
     <p>${book.title}</p>
     <p><span>by</span>${book.author}</p>
     <button type="submit" class="delete">Remove</button>
     `;
    list.appendChild(addedbook);
  }

  // Event: Deletes a Book
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.remove();
    }
  }

  // Event: Clears data
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);
document.querySelector('#form').addEventListener('submit', () => {
  // Get form Values from the input fields
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);
  UI.addBookToList(book);
  Storage.addBook(book);
  UI.clearFields();
});

// Event: Deletes a Book
document.querySelector('#book-collection').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);

  // Remove book from Store
  Storage.removeBook(
    e.target.previousElementSibling.previousElementSibling.textContent,
  );
});