<<<<<<< HEAD
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let arr = mix.map(function(letter){
    return isNaN(letter)?letter:"";

}).reduce(function(acc,current){
    return acc + current;
})

=======
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let arr = mix.map(function(letter){
    return isNaN(letter)?letter:"";

}).reduce(function(acc,current){
    return acc + current;
})

>>>>>>> c7c62dc (add)
console.log(arr)