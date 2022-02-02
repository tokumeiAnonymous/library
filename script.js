
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
cancel.addEventListener('click', () => {
    document.getElementById("popupForm").style.display = "none";
    clearForm();
});

submit.addEventListener('click', () => {

    let title = titleInput.value;
    let author = authorInput.value;
    let page = pageInput.value;
    let readStatus = read.value;
    let newBook = book(title, author, page, read);
    myLib.push(newBook);
});


const book = (title, author, pages, read) => {
    
    const changeRead = (read) => {
        if (read == "Read") this.read = "Not Read";
        else this.read = "Read";
    }

    return {title, author, pages, read, changeRead}
}

const clearForm = () => {

    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
}

const createReadTd = (book) => {

    let readStatusTd = document.createElement('td');
    let readStatusBtn = document.createElement('button');
    readStatusBtn.textContent = book.read.value;
    readStatusBtn.addEventListener('click', () => {
        book.changeRead(book.read)
    });
    readStatusTd.appendChild(readStatusTd);

    return readStatusTd;
}

const createDeleteTd = (book) => {

    let deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => {
        myLib.splice(myLib.indexOf(book), 1)
    });
    deleteTd.appendChild(deleteBtn);

    return deleteTd;
}

const updateTable = () => {

    body.textContent = '';

    myLib.forEach((book, index) => {
        let row = document.createElement('tr');
        Object.keys(book).forEach(prop => {
            let newTd = document.createElement('td');
            newTd.textContent = book[prop];
            row.appendChild(newTd);
        });
    
        row.appendChild(createReadTd(book));
        row.appendChild(createDeleteTd(book));
    });
    body.appendChild(row);
}

const submitData = () => {
    addBookTolib();
    updateTable();
    closeForm();
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