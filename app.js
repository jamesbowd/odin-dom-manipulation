const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";

container.appendChild(paragraph);

const heading = document.createElement("h3");
heading.textContent = "I'm a blue h3!";
heading.style.color = "blue";

container.appendChild(heading);

const div = document.createElement("div");
const divParagraph = document.createElement("p");
const divHeading = document.createElement("h1");
divHeading.textContent = "I'm in a div";
divParagraph.textContent = "ME TOO";
div.appendChild(divHeading);
div.appendChild(divParagraph);
div.setAttribute("style", "border: solid black 1px; background: pink");

container.appendChild(div);
