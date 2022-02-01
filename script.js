function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

function updateTable() {

    body.textContent = '';

    for (let book in myLib){
        let row = document.createElement('tr');
        
    }
}

function addReadBtn(book) {

    let readStatusTd = document.createElement('td');
    let readStatusBtn = document.createElement('button');
    readStatusBtn.onclick = changeStatus;
    readStatusBtn.textContent = "Change Status";
    readStatusTd.appendChild(readStatusBtn);

    return readStatusTd;
}

function changeStatus(book) {
    book.read = !book.read;
    updateTable();
}

function addDeleteBtn(index) {

    let deleteTd = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.onclick = deleteEntry;
    deleteBtn.textContent = "Delete";
    cell.appendChild(deleteBtn);

    return deleteTd;
}

function deleteEntry() {
    myLibrary.splice(index, 1);
    updateTable();
}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
    clearForm();
}

function submitData() {
    addBookToLib();
    updateTable();
    closeForm();
}

function addBookTolib() {
    let title = titleInput.value;
    let author = authorInput.value;
    let page = pageInput.value;
    let readStatus = read.value;
    let newBook = new Book(title, author, page, read);
    myLib.push(newBook);
    console.log("Book added");
}

function clearForm() {

    titleInput.value = "";
    authorInput.value = "";
    pageInput.value = "";
}

let myLib = [];

let book1 = new Book("The Book Thief",
            "Markus Zusak", 400, "Read");

let book2 = new Book("The Idiot", 
            "Fyodor Doestoyevsky", 655, "Read");

let book3 = new Book("The Name of The Wind", 
            "Patrick Rothfuss", 719, "Not Read");

myLib.push(book1);
myLib.push(book2);
myLib.push(book3);


// DOM Objects
const body = document.querySelector('.table-body');
const addBook = document.querySelector('.add-book');
const form = document.querySelector('.formPopup');
const titleInput = form.querySelector('#title');
const authorInput = form.querySelector('#author');
const pageInput = form.querySelector('#pages');
const read = form.querySelector('#read');
const submit = form.querySelector('#submit');

const removeFromLibrary = (index) => {

}

const createDeleteTd = (index) => {

}
/*
const updateTable = () => {
    body.textContent = '';

    myLib.forEach((book, index)) => {
        let row = document.createElement('tr');
        Object.keys(book).forEach(prop => {
            let newTd = document.createElement('td');
            newTd.textContent = book[prop];
            row.appendChild(newTd);
        })
    }
}
*/


updateTable(body, myLib);

addBook.addEventListener('click', openForm);