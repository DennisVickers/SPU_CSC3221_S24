// 1. Accessing Elements
const title = document.getElementById("title");
const container = document.getElementById("container");
const paragraphs = document.getElementsByClassName("text");
const list = document.getElementById("list");

// 2. Modifying Text and HTML
title.innerHTML = "DOM Manipulation Example";
container.innerHTML += '<p class="text">New Paragraph</p>';

// 3. Changing Style
title.style.color = "blue";
container.style.backgroundColor = "#f2f2f2";

// 4. Event Handling
document.getElementById("change-title").addEventListener("click", function() {
    title.innerHTML = "Title Changed!";
});

// 5. Adding and Removing Elements
document.getElementById("add-item").addEventListener("click", function() {
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
});

// 6. Traversing the DOM
const firstParagraph = container.firstElementChild;
const secondParagraph = firstParagraph.nextElementSibling;

console.log("First paragraph:", firstParagraph.textContent);
console.log("Second paragraph:", secondParagraph.textContent);

// 7. Attribute manipulation
if (!container.hasAttribute("data-example")) {
    container.setAttribute("data-example", "yes");
}

console.log("Data attribute:", container.getAttribute("data-example"));

// 8. Query Selector
const firstTextClass = document.querySelector('.text');
console.log("First element with class 'text':", firstTextClass.textContent);
