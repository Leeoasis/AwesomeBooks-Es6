import Book from './modules/bookClass.js';
import Storage from './modules/storage.js';
import UI from './modules/ui.js';
import { DateTime } from './modules/luxon.js';

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

// Get target varilables
const bookCollection = document.querySelector('#book-collection');
const addBook = document.querySelector('#add-books');
const addContact = document.querySelector('.contact-display');
const mainTitle = document.querySelector('.books');

// Displaying booklist page
const list = document.querySelector('#list');
list.addEventListener('click', () => {
  bookCollection.style.display = 'flex';
  addBook.classList.add('hidden');
  addContact.classList.add('hidden');
  mainTitle.style.display = 'block';
});

window.addEventListener('load', () => {
  addBook.classList.add('hidden');
  mainTitle.style.display = 'block';
  addContact.classList.add('hidden');
});

// Displaying Add Book page
const addNewBook = document.querySelector('#add-link');
addNewBook.addEventListener('click', () => {
  bookCollection.style.display = 'none';
  addBook.classList.remove('hidden');
  addContact.classList.add('hidden');
  mainTitle.style.display = 'none';
});

// Displaying Contact page
const addNewContact = document.querySelector('#contacts');
addNewContact.addEventListener('click', () => {
  bookCollection.style.display = 'none';
  addBook.classList.add('hidden');
  addContact.classList.remove('hidden');
  mainTitle.style.display = 'none';
});

// Displaying booklist page
const addNewBtn = document.querySelector('.addbtn');
addNewBtn.addEventListener('click', () => {
  bookCollection.style.display = 'flex';
  addBook.classList.add('hidden');
  addContact.classList.add('hidden');
});

const time = document.querySelector('.date-time');
const date = new Date();
time.textContent = `${date.toDateString()}`;

setInterval(() => {
  const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  time.textContent = `${date}`;
}, 1000);