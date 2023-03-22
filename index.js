// Write your code here!
const body = document.getElementsByTagName("body")[0];
const firstChild = body.querySelector("main:nth-child(1)");
body.removeChild(firstChild);

const newHeader = document.createElement("h1");
newHeader.id="victory"
newHeader.textContent= "Martha is the champion";

