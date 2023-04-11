<<<<<<< HEAD
/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(d));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a , Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
=======
/*
  Number Challenge
*/

let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(d));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a , Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
>>>>>>> f96307428e4ae102279be13ca54f0454c575629d
console.log(Math.ceil(Math.floor(b) / Math.ceil(d))); // 67 => Number