function Book(title, author) {
    this.title = title;
    this.author = author;
}

var bookIdMap = new WeakMap, bookCount = 0;

function bookID(book){
    if (!bookIdMap.has(book)) bookIdMap.set(book, ++bookCount);
    return bookIdMap.get(book);
}

var example = new Book('Lorem Ipsum', 'Tester');
var example2 = new Book('Second book', 'Testero Testyy');

let books = [{}];




books.push(example)