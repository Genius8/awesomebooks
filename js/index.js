// Create object Book
function Book(title, author) {
    this.title = title;
    this.author = author;
}

//Set an ID to books
var bookIdMap = new WeakMap, bookCount = 0;

function bookID(book){
    if (!bookIdMap.has(book)) bookIdMap.set(book, ++bookCount);
    return bookIdMap.get(book);
}

// Example books

var example = new Book('Lorem Ipsum', 'Tester');
var example2 = new Book('Second book', 'Testero Testyy');

// Add books





books.push(example)