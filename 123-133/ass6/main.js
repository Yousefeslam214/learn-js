let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

chars.sort();
chars.copyWithin(0 ,3,6);
console.log(chars)


// Needed Output
//['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']