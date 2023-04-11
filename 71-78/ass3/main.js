<<<<<<< HEAD
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let arr =myArray.reduce(function(acc , current){
    return acc + current;
}).split(",").reduce((function(acc , current){
    return acc + current;}))

=======
let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let arr =myArray.reduce(function(acc , current){
    return acc + current;
}).split(",").reduce((function(acc , current){
    return acc + current;}))

>>>>>>> c7c62dc (add)
console.log(arr)