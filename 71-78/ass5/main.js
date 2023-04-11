<<<<<<< HEAD
let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let arr =nums.reduce(function(acc,current,index){
    return nums[index]%2==0?acc*current:acc+current;
})
=======
let nums = [2, 12, 11, 5, 10, 1, 99];

// 500

let arr =nums.reduce(function(acc,current,index){
    return nums[index]%2==0?acc*current:acc+current;
})
>>>>>>> c7c62dc (add)
console.log(arr)