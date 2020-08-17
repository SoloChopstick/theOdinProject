const buttons = document.querySelector("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    alert(button.id);
  })
}
