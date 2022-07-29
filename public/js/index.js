//seeing book data
//right now will only show data from a specific book based on isbn 
//need to make it show any book
function BookData() {
    fetch('https://openlibrary.org/works/OL45883W.json')
    .then((response) => response.json())
    .then((data) => console.log(data));
    }
    BookData();

//searching for book data
//right now shows all books based off title search, I can add more parameters though
// once we have the handlebars setup I will be able to use innerHTML to show the data 
function SearchBook() {
    fetch('https://openlibrary.org/search.json?q=title')
    .then((response) => response.json())
    .then((data) => console.log(data));
}
SearchBook();