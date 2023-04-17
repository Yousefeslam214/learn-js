let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";


//code
let eRP =/os(\d*)o/ig ;

console.log(specialNames.match(eRP))


// Output
// ['Os10O', 'OsO', 'Os100O']





