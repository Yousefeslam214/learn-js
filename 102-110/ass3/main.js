let myDiv = document.createElement("div");
myDiv.textContent = 10;

document.body.appendChild(myDiv);
let counter = setInterval(function () {
myDiv.textContent = +myDiv.textContent -1;
if (+div.textContent === 0) {
    clearInterval(counter);
  }
}, 1000);