const contentContainer = document.querySelector('.content-container');
const dialog = document.querySelector('dialog');
const btnAddBook = document.getElementById('btn-add-book');
const titleInputBox = document.getElementById('book_title');
const authorInputBox = document.getElementById('book_author');
const pagesInputBox = document.getElementById('book_pages');
const statusSelectBox = document.getElementById('book_status');
const btnCancel = document.getElementById('close-dialog');
const btnSubmit = document.getElementById('submit-dialog');

let tempTitle;
let tempAuthor;
let tempPages;
let tempStatus = true;

btnAddBook.addEventListener('click', () => {
    dialog.showModal();
});

titleInputBox.addEventListener('change', (e) => {
    tempTitle = titleInputBox.value;
});

authorInputBox.addEventListener('change', (e) => {
    tempAuthor = authorInputBox.value;
});

pagesInputBox.addEventListener('change', (e) => {
    tempPages = pagesInputBox.value;
});

statusSelectBox.addEventListener('change', (e) => {
    if (statusSelectBox.value === 'complete') {
        tempStatus = true;
    } else {
        tempStatus = false;
    }
});

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    newBook = new Book(tempAuthor, tempTitle, tempPages, tempStatus);
    addBookToLibrary(newBook);
    dialog.close();
    tempAuthor = '';
    authorInputBox.value = '';
    tempTitle = '';
    titleInputBox.value = '';
    tempPages = '';
    pagesInputBox.value = '';
    tempStatus = true;
    statusSelectBox.value = 'complete';
})

btnCancel.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.close();
})

let btnStatus = '.btn-status';
document.addEventListener('click', function (e) {
    let el = e.target;
    if (el.matches(btnStatus)) {
        e.target.classList.toggle('complete');
        e.target.classList.toggle('incomplete');

        if (e.target.classList.contains('complete')) {
            e.target.textContent = 'Complete';
        } else {
            e.target.textContent = 'Incomplete';
        };
    } else {
        return;
    }
})

let trashCanIcon = '.trash-can-icon';
document.addEventListener('click', function (e) {
    let el = e.target;
    if (el.matches(trashCanIcon)) {
        theNumber = el.getAttribute('data-trash-number');
        let myDiv = document.querySelector(`[data-index-number='${theNumber}']`);
        myDiv.remove(myDiv);
    }
})

const myLibrary = [];

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.index = null;
}

function addBookToLibrary(newBook) {
    addToArray(newBook);
    addBookCard(newBook);
}

const earthsea = new Book('Ursula K. Le Guin', 'A Wizard of Earthsea', 267, true); //example
const hobbit = new Book('J.R.R. Tolkein', 'The Hobbit', 900, false) //example

function addToArray(newBook) {
    myLibrary.push(newBook);
    associateObjectToIndex(newBook);
}

function associateObjectToIndex(y) {
    libraryIndex = myLibrary.findIndex(x => x.title === y.title);
    y.index = libraryIndex;
}

function addBookCard(newBook) {
    let newCard = document.createElement('div');
    newCard.classList.add('content-card');
    newCard.setAttribute('data-index-number', newBook.index);
    contentContainer.appendChild(newCard);

    let newBookTitle = document.createElement('p');
    newBookTitle.classList.add('book-title', 'content');
    newBookTitle.textContent = `${newBook.title}`;
    newCard.appendChild(newBookTitle);

    let newBookAuthor = document.createElement('p');
    newBookAuthor.classList.add('author', 'content');
    newBookAuthor.textContent = `${newBook.author}`;
    newCard.appendChild(newBookAuthor);

    let newBookPages = document.createElement('p');
    newBookPages.classList.add('page-count', 'content');
    newBookPages.textContent = `${newBook.pages}`;
    newCard.appendChild(newBookPages);

    let contentLowerRow = document.createElement('div');
    contentLowerRow.classList.add('content-lower-row');
    newCard.appendChild(contentLowerRow);

    let newStatusBtn = document.createElement('button');
    if (newBook.status == true) {
        newStatusBtn.classList.add('btn-status', 'complete');
        newStatusBtn.textContent = 'Complete';
    } else {
        newStatusBtn.classList.add('btn-status', 'incomplete');
        newStatusBtn.textContent = 'Incomplete';
    }
    contentLowerRow.appendChild(newStatusBtn);

    let newTrashCan = document.createElement('img');
    newTrashCan.classList.add('trash-can-icon');
    newTrashCan.src = '/images/trash-can-outline.svg';
    newTrashCan.setAttribute('data-trash-number', newBook.index);
    contentLowerRow.appendChild(newTrashCan);
}
