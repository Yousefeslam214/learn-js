<<<<<<< HEAD
let myString = "EElllzzzzzzzeroo";

// Elzero
let arr = myString.split("").filter(function(letter ,index){
    return letter != myString[index+1 ]
}).reduce(function(acc , current){
    return acc +current;
})


=======
let myString = "EElllzzzzzzzeroo";

// Elzero
let arr = myString.split("").filter(function(letter ,index){
    return letter != myString[index+1 ]
}).reduce(function(acc , current){
    return acc +current;
})


>>>>>>> c7c62dc (add)
console.log(arr)