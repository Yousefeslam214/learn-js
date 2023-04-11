<<<<<<< HEAD
function checkStatus(a, b, c) {
  if(typeof a=="string" && typeof b ==="number" && typeof c ==="boolean"){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Available For Hire"`)
  }
  else if(typeof b=="string" && typeof a ==="number" && typeof c ==="boolean"){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Available For Hire"`)
  }
  else if(typeof a=="string" && typeof b ==="number" && typeof c ==="boolean"){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Available For Hire"`)
  }
  else if(typeof c=="string" && typeof b ==="number" && typeof a ==="boolean"){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Available For Hire"`)
  }else if(a == false){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Not Available For Hire"`)
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
=======
function checkStatus(a, b, c) {
  if(typeof a=="string" && typeof b ==="number" && typeof c ==="boolean"){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Available For Hire"`)
  }
  else if(typeof b=="string" && typeof a ==="number" && typeof c ==="boolean"){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Available For Hire"`)
  }
  else if(typeof a=="string" && typeof b ==="number" && typeof c ==="boolean"){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Available For Hire"`)
  }
  else if(typeof c=="string" && typeof b ==="number" && typeof a ==="boolean"){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Available For Hire"`)
  }else if(a == false){
    console.log(`"Hello ${a}, Your Age is ${b}, You Are Not Available For Hire"`)
  }
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
>>>>>>> c7c62dc (add)
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"