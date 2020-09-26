const bgcolor = ["red", "green", "blue"];
console.log("object");

const button = document.getElementsByTagName("button");

const changeBgColor = () => {
  let count = Math.floor(Math.random() * 3);
  document.body.style.backgroundColor = bgcolor[count];
  //   console.log(bgcolor[count]);
  //   console.log(count);
};
