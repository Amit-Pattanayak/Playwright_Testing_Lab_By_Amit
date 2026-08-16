
// FUNCTION

// Add two number using function 
/*
function addition(a, b){
    console.log("Addition of the two number is" + (a + b));
}
addition(100,200);
*/
/*
const arrowfun=(a,b)=>{
    console.log (a*b);

}
arrowfun(4,5);
*/

// Create a function that take a string as argument and return the number of vowle in the string
/*
function countVowels(str){
    let count=0;
    for (const char of str){
        if (char==='A'||char==='E'||char==='I'||char==='O'||char==='U'){
            count++;
        }
    }
    console.log(count);
}
 countVowels("AMIT")
 //Another way
/*
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  console.log(count);
}
 countVowels("Pattanayak")

 */


const countVowel=(str)=>{
let count=0;
let vowel=['a','e','i','o','u','A','E','I','O','U']

for (let char of str){
    if (vowel.includes (char)){
        count++;
    }

}

console.log(count);

}
 countVowel("Pattanayak")