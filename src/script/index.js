
const button = document.getElementById("revealButton");
const content = document.getElementById("content");

button.addEventListener("click", function() {
    content.classList.toggle("visible"); 
});
