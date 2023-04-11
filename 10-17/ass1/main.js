// Add Variables Here
let num1 =10 ,
num2 =20;
// Ouput
console.log(num1 + "" + num2); // Normal Concatenate => 1020
console.log(typeof (num1+""+ num2)); // Normal Concatenate => String
console.log(`${num1}${num2}`); // Template Literals Way => 1020
console.log(typeof(`${num1}${num2}`)); // Template Literals Way => String

console.log(num2 + "\n" + num1);
/*
  Normal Concatenate
  20
  10
*/

console.log(`${num2}
${num1}`);
/*
  Template Literals Way
  20
  10
*/