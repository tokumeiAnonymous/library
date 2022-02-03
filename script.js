
// DOM Objects
const body = document.querySelector('.table-body');
const addBook = document.querySelector('.add-book');
const form = document.querySelector('.formPopup');
const titleInput = form.querySelector('#title');
const authorInput = form.querySelector('#author');
const pageInput = form.querySelector('#pages');
const read = form.querySelector('#read');
const submit = form.querySelector('#submit');
const cancel = form.querySelector('#cancel');

addBook.addEventListener('click', () => {
    document.getElementById("popupForm").style.display = "block";
});

const closeForm = () => {
    document.getElementById("popupForm").style.display = "none";
    clearForm();
}

cancel.addEventListener('click', closeForm);

submit.addEventListener('click', () => {

    if (validateBook()) {
        let title = titleInput.value;
        let author = authorInput.value;
        let page = pageInput.value;
        let readStatus = read.value;
        let newBook = book(title, author, page, read);
        myLib.push(newBook);
        updateTable();
        closeForm();
    }
});


const book = (title, author, pages, read) => {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    return { title, author, pages, read }
}

const createReadTd = (book) => {

    let readStatusBtn = document.createElement('button');
    readStatusBtn.textContent = "Change Status";
    readStatusBtn.addEventListener('click', () => {
        if (book.read == "Read") book.read = "Not Read";
        else book.read = "Read";

        updateTable();
    });

    return readStatusBtn;
}

const createDeleteTd = (book) => {

    let deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => {
        myLib.splice(myLib.indexOf(book), 1)
        updateTable();
    });
    deleteTd.appendChild(deleteBtn);

    return deleteTd;
}

function clearForm() {

    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
}

function updateTable() {

    body.textContent = '';

    myLib.forEach((book, index) => {
        let row = document.createElement('tr');
        Object.keys(book).forEach(prop => {
            let newTd = document.createElement('td');
            newTd.textContent = book[prop];
            if (prop == "read") {
                if(book[prop] != "Read" && book[prop] != "Not Read") {
                    book[prop] = "Read";
                    newTd.textContent = book[prop];
                }
                newTd.appendChild(createReadTd(book));
            }
            row.appendChild(newTd);
        });

        // row.appendChild(createReadTd(book));
        row.appendChild(createDeleteTd(book));
        body.appendChild(row);
    });

}

function validateBook() {

    if (titleInput.value == "" || authorInput.value == "" || pageInput.value == "") return false;
    return true;

}

let myLib = [];

let book1 = book("The Book Thief",
    "Markus Zusak", 400, "Read");

let book2 = book("The Idiot",
    "Fyodor Doestoyevsky", 655, "Read");

let book3 = book("The Name of The Wind",
    "Patrick Rothfuss", 719, "Not Read");

myLib.push(book1);
myLib.push(book2);
myLib.push(book3);

updateTable();