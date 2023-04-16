let myDiv = document.createElement("div");
myDiv.textContent=10 ;

document.body.appendChild(myDiv);
let counter = setInterval(function () {
  myDiv.textContent = +myDiv.textContent - 1;
  if (+(myDiv.textContent) === 5) {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=400,height=400,top=200,left=600"
    );  if (+(div.textContent) === 0) {
      clearInterval(counter);
    } }
}, 1000);










