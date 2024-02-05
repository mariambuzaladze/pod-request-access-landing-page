let input = document.getElementsByClassName("b1")[0];
let errorMessage = document.getElementsByClassName("error")[0];

input.addEventListener("input", function () {
  let userInput = input.value.trim();
  let last = userInput.split("@");

  if (last[1] !== "mail.com") {
    errorMessage.style.display = "inline-block";
  } else {
    errorMessage.style.display = "none";
  }

  if (userInput.length === 0) {
    errorMessage.style.display = "none";
  }
});
