let input = document.getElementsByClassName("b1")[0];
console.log(input);

input.addEventListener("input", function () {
  let userInput = input.value.trim();
  let last = userInput.split("@");

  if (last[1] !== "mail.com") {
    console.log("error");
  }
});
