let message = prompt("Print Number From – To","Example: 5-20");
let num =message.split("-");
let start = Math.min(...num)
let end = Math.max(...num)
for(let i=start;i <= end;i++){
    document.write(i)
    console.log(i)
}