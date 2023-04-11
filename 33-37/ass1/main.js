// Test Case 1
//let num = 9; // "009"

// Test Case 2
//let num = 20; // "020"

// Test Case 3
let num = 110; // "110"

if(0 <= num && num <= 9){
    console.log("0" + "0" + num);
}


   else if ( 10 <= num && num <= 99){
    console.log("0"+ num );
}


else if ( 100 <= num && num <= 999){
    console.log( num );
}