let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [one,two,three] = myFriends;
let friendsDataile = function(friendsObj){
    const{title:t ,age:a,available:ava,skills:[,s2]}=friendsObj;
    console.log(t)
    console.log(a)
    console.log(ava ?"available" :"not available")
    console.log(s2)

}
if(chosen===1)friendsDataile(one)
if(chosen===2)friendsDataile(two)
if(chosen===3)friendsDataile(three)



/*
// Write Your Code Here

// If chosen === 1

"Osama"
39
"Available"
"CSS"

// If chosen === 2

"Ahmed"
25
"Not Available"
"Django"

// If chosen === 3

"Sayed"
33
"Available"
"Laravel"
*/