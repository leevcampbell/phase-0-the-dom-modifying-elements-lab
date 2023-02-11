// Write your code here!



document.getElementById("main").remove();


const newHeader = document.createElement("h1");
const name = prompt("Enter your name: ");
newHeader.innerHTML = `${name} is the champion`;
newHeader.id = "victory";
document.body.appendChild(newHeader);
