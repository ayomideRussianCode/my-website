const button = document.getElementById("revealButton");
const content = document.getElementById("content");

button.style.padding = "10px 20px";
button.style.backgroundColor = "rgba(43, 46, 226, 0.63)";
button.style.color = "#fff";
button.style.border = "none";
button.style.borderRadius = "16px";
button.style.cursor = "pointer";
button.style.fontSize = "1em";

button.addEventListener("click", function () {
  content.classList.toggle("visible");
  content.classList.toggle("hidden");

  if (content.classList.contains("visible")) {
    button.textContent = "Click to Hide My Friends";
  } else {
    button.textContent = "Click to Reveal";
  }
});
