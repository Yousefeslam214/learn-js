


let theNumber = 100020003000;


console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""))
// Needed Output
123