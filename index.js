function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

  return fetch("https://anapioficeandfire.com/api/books")
  .then(response => response.json())
  .then(renderBookData =>renderBooks(renderBookData))
}

fetchBooks()
function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => 
function renderBooks(books) {
    main.appendChild(h2);
  });
}

renderBooks()
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
// Awesome job