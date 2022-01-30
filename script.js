
function Book() {

    let title, author, pages, status;

    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

let myLib =[];

let book1 = new Book("The Book Thief",
            "Markus Zusak", 400, true);
let book2 = new Book ("The Idiot", 
            "Fyodor Doestoyevsky", 400, true);
let book3 = new Book ("The Name of The Wind", 
            "Patrick Rothfuss", 600, false);

myLib.push(book1);
myLib.push(book2);
myLib.push(book3);
