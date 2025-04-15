const inputText = document.getElementById("inputText");
const displayText = document.getElementById("displayText");

inputText.addEventListener("input", function () {
  displayText.textContent = inputText.value;
  if (inputText.value.length > 20) {
    displayText.classList.add("long-text");
  } else {
    displayText.classList.remove("long-text");
  }
});
