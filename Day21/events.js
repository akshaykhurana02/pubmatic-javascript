document
  .getElementById("heading1")
  .addEventListener("mouseover", changeHeading);
  
document
  .getElementById("heading1")
  .addEventListener("mouseout", changeHeadingBackToOriginal);

function changeHeading() {
  document.getElementById("heading1").innerText = "Heading 1";
}

function changeHeadingBackToOriginal() {
  document.getElementById("heading1").innerText = "Hello, JavaScript!";
}
