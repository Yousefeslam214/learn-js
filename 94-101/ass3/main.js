let ourDiv = document.querySelector(".our-element");
let ourP = document.querySelector("p");
ourP.remove();

let before = document.createElement("div");

before.setAttribute("class","start")
before.setAttribute("tittle","Start Element");
before.setAttribute("data-value", "Start");
before.innerHTML = "Start";
ourDiv.before(before);

let after =document.createElement("div");
ourDiv.after(after)
after.innerHTML="End";
before.setAttribute("class","end")
before.setAttribute("tittle","End Element");
before.setAttribute("data-value", "End");