/*
  Challenge 1
*/

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);//100
console.log(11 + 20 + 80 - 11);
/*
  [++a] [+] [+b++] [+c++] [-] [+a++]
  [++a]
  - Value:11
  - Explain:pre
  [+]
  - Explain: add
  [+b++]
  - Value: 20 
  - Explain: post
    [+c++]
  - Value: 80
  - Explain: post
  [-]
  - Explain: minus
    [+a++]
  - Value: 11 
  - Explain: post
*/


console.log(++a + -b + +c++ - -a++ + +a);//100
console.log(13 + -21 + 81 - -13 + 14);
/*
  [++a] [+] [-b] [+] [+c++] [-] [-a++] [+] [+a]
  [++a]
    - value : 13
    - explain: pre
    [-b]
    - value : 21
    - explain: no 
    [+c++]
    - value : 81
    - explain: post
    [-a++]
    - value : -13
    - explain: post
    [+a]
    - value : 14
    - explain: post
 
*/
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);//100
console.log(81 + 21 + 13 * 21 - 22 * 13 + 12 -1);
/*
  [--c] [+] [+b] [+] [--a] [*] [+b++] [-] [+b] [*] [a] [+] [--a] [-] [+true]
  [--c]
    - value : 81
    - explain: pre
    [+b]
    - value : 21
    - explain: no
    [--a]
    - value : 13
    - explain: pre
    [*]
    - explain: multiply by
    [+b++]
    - value : 21
    - explain: post
    [+b]
    - value : 22
    - explain: no
    [a]
    - value : 13
    - explain: no 
    [--a]
    - value : 12
    - explain: pre 
    [+true]
    - value : 1
    - explain: true = 1
*/


/*
  Challenge 2
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Do Not Use Variable Twice

console.log(-d * +e ); // 2000
console.log(-d + ++e * ++g + ++f); // 173