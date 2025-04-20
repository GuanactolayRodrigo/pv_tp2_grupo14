export function changeBackground (displayText, inputText) {
  displayText.textContent = inputText.value;
  if (inputText.value.length > 20) {
    displayText.classList.add("long-text");
  } else {
    displayText.classList.remove("long-text");
  }
}