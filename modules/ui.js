// UI Class: Displays listed Books
import Storage from './storage.js';

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
