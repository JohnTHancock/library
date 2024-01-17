const contentContainer = document.querySelector('.content-container');
// const statusBtn = document.querySelector('.btn-status');

let btnStatus = '.btn-status';

document.addEventListener('click', function(e) {

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

const myLibrary = [];

function Book(author, title, pages, status) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.check = function() {
        console.log(`${this.title} by ${this.author} is ${this.pages} pages long.`);
    }
}

const earthsea = new Book('Ursula K. Le Guin', 'A Wizard of Earthsea', 267, true); //example

function addToArray(newBook) { //temporary function
    myLibrary.push(newBook);
}

// function addContentCard() {
//     let newCard = document.createElement('div');
//     newCard.classList.add('content-card');
//     contentContainer.appendChild(newCard);

//     let newBookTitle = document.createElement('p');
//     newBookTitle.classList.add('book-title', 'content');
//     newBookTitle.textContent = 'Hello world';
//     newCard.appendChild(newBookTitle);

//     let newBookAuthor = document.createElement('p');
//     newBookAuthor.classList.add('author', 'content');
//     newBookAuthor.textContent = 'Hugh Janus';
//     newCard.appendChild(newBookAuthor);

//     let newBookPages = document.createElement('p');
//     newBookPages.classList.add('page-count', 'content');
//     newBookPages.textContent = '69'
//     newCard.appendChild(newBookPages);

//     let contentLowerRow = document.createElement('div');
//     contentLowerRow.classList.add('content-lower-row');
//     newCard.appendChild(contentLowerRow);

//     let newStatusBtn = document.createElement('button');
//     newStatusBtn.classList.add('btn-status', 'complete');
//     newStatusBtn.textContent = 'Complete';
//     contentLowerRow.appendChild(newStatusBtn);

//     let newTrashCan = document.createElement('img');
//     newTrashCan.classList.add('trash-can-icon');
//     newTrashCan.src = '/images/trash-can-outline.svg';
//     contentLowerRow.appendChild(newTrashCan);
// }

function addBookToLibrary(newBook) {
    let newCard = document.createElement('div');
    newCard.classList.add('content-card');
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
    newStatusBtn.classList.add('btn-status', 'complete');
    newStatusBtn.textContent = 'Complete';
    contentLowerRow.appendChild(newStatusBtn);

    let newTrashCan = document.createElement('img');
    newTrashCan.classList.add('trash-can-icon');
    newTrashCan.src = '/images/trash-can-outline.svg';
    contentLowerRow.appendChild(newTrashCan);
}