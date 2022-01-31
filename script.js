
function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
}

function generateTable(body, data){
    for (let element of data){
        let row = body.insertRow();

        for(key in element){
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);

        }
        addButton(row);

    }
}

function addButton(row) {

    let cell = row.insertCell();
    const btn = document.createElement('button');
    btn.onclick = deleteEntry;
    btn.innerText = "Delete";
    cell.appendChild(btn);
}

function deleteEntry() {
    body.removeChild(body.lastElementChild);
}

function openForm() {
    document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}

let myLib = [];

let book1 = new Book("The Book Thief",
            "Markus Zusak", 400, true);

let book2 = new Book("The Idiot", 
            "Fyodor Doestoyevsky", 655, true);

let book3 = new Book("The Name of The Wind", 
            "Patrick Rothfuss", 719, false);

myLib.push(book1);
myLib.push(book2);
myLib.push(book3);

const body = document.querySelector('.table-body');

generateTable(body, myLib);

const addBook = document.querySelector('.add-book');
addBook.addEventListener('click', openForm);