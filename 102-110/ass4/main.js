let myDiv = document.createElement("div");
myDiv.textContent=10 ;

document.body.appendChild(myDiv);
let counter = setInterval(function () {
  myDiv.textContent = +myDiv.textContent - 1;
  if (+myDiv.textContent === 0) {
    window.location.href = "https://elzero.org";
  }
}, 1000);










