<<<<<<< HEAD
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let letter = "A";
while(index < friends.length){
  //while(friends[i].indexOf("A"))
  index += 1;
  if(typeof friends[index] === "string" && !friends[index].startsWith("A"))
  {
    console.log(friends[index]);
  }
  
  
  }

// Output
/*
"1 => Sayed"
"2 => Mahmoud"
=======
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;
let letter = "A";
while(index < friends.length){
  //while(friends[i].indexOf("A"))
  index += 1;
  if(typeof friends[index] === "string" && !friends[index].startsWith("A"))
  {
    console.log(friends[index]);
  }
  
  
  }

// Output
/*
"1 => Sayed"
"2 => Mahmoud"
>>>>>>> c7c62dc (add)
*/