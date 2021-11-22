function Book(title, author) {
    this.title = title;
    this.author = author;
}

var example = new Book('Lorem Ipsum', 'Tester');
var example2 = new Book('Second book', 'Testero Testyy');

let books = [{}];

books.push(example)