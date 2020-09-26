const button = document.getElementById("btn");

button.addEventListener("click", () => {
  let letter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color = color + letter[Math.floor(Math.random() * 16)];
  }

  document.body.style.backgroundColor = color;
});
