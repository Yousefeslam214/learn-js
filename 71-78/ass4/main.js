<<<<<<< HEAD
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let arr =numsAndStrings.filter(function(ele){
    return !isNaN(ele);
}).map(function(ele){
    return -ele;
})



=======
let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]

let arr =numsAndStrings.filter(function(ele){
    return !isNaN(ele);
}).map(function(ele){
    return -ele;
})



>>>>>>> c7c62dc (add)
console.log(arr)