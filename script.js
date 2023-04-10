let myLibrary = [];

function Book(author, title, pages) {
	this.author = author;
	this.title = title;
	this.pages = pages;
	this.isRead = false;
}

function addBookToLibrary() {
	// do stuff here
}

const addButton = document.querySelector("#add");
const submitButton = document.querySelector(".submit");
const toggleForm = document.querySelector(".pop-up");

addButton.addEventListener("click", () => {
	toggleForm.classList.remove("hidden");
});

submitButton.addEventListener("click", () => {
	toggleForm.clistList.add("hidden");
});
