import { initializeApp } from "firebase/app";
import "./style.css";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	//...
};

const app = initializeApp(firebaseConfig);

let myLibrary = [];

class Book {
	constructor(author, title, pages) {
		this.author = author;
		this.title = title;
		this.pages = pages;
		this.isRead = false;
	}
}

function addBookToLibrary() {
	table.innerHTML = "";
	myLibrary.forEach((element, index) => {
		let htmlString = `<div id="${index}">
        <h3>${element.title}</h3>
        <h3>${element.author}</h3>
        <h3>${element.pages} pages</h3>
        <button class="${element.isRead ? "read" : "unread"}" id="read-status">
                ${element.isRead ? "Read" : "Unread"}
        </button>
        <button id="remove">Remove</button>
        </div>`;

		table.insertAdjacentHTML("beforeend", htmlString);
	});

	document.querySelectorAll("#remove").forEach((button) => {
		button.addEventListener("click", (e) => {
			let id = parseInt(e.target.parentElement.id);
			myLibrary.splice(id, 1);
			addBookToLibrary();
		});
	});

	document.querySelectorAll("#read-status").forEach((button) => {
		button.addEventListener("click", (e) => {
			let id = parseInt(e.target.parentElement.id);
			myLibrary[id].isRead = !myLibrary[id].isRead;
			addBookToLibrary();
		});
	});
}

const addButton = document.querySelector("#add");
const submitButton = document.querySelector(".submit");
const toggleForm = document.querySelector(".pop-up");
const submitForm = document.getElementById("add-book");
const table = document.querySelector(".content");

// initialize

addButton.addEventListener("click", () => {
	toggleForm.classList.remove("hidden");
});

submitForm.addEventListener("submit", (e) => {
	e.preventDefault();
	// will be triggered once submit button is clicked, then push a new object into the myLibrary array
	let title = document.getElementById("title");
	let author = document.getElementById("author");
	let pages = document.getElementById("pages");

	myLibrary.push(new Book(author.value, title.value, pages.value));

	// clear form
	e.target.reset();

	// remove overlay
	toggleForm.classList.add("hidden");
	addBookToLibrary();
});
