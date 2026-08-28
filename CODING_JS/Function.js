
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

/*
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
 */

// USE OF FOR EACH LOOP
/*
 let num=[1,2,3,4,5]

 num.forEach(function printval(val){
    console.log(val);
 })
    */
// find the Square of the number in array using foreach

/*
 let num=[25,3,4,5,6,7,8,9,10]
  sqr=0;
num.forEach(function printval(val){
    sqr=val*val;
    console.log(sqr);
 })
*/

// FIND THE EVEN NUMBER FROM THE ARRAYS USING FILTER function
/*
let num=[23,345,456,432,67,777,576]

let newnum=num.filter((val=>{
    return val%2===0;
}))
console.log(newnum);
*/

//From the given mark array find the number which are 90+
/*
let num=[76,98,67,89,92,90,56]
let numm=[];
for(let i=0;i<num.length;i++){
    if(num[i]>=90){
       numm.push(num[i]);
        
    }
}
console.log(numm);
*/

//Take a number n as input from user. Create an array of numbers from 1 to n.
/*
const prompt = require("prompt-sync")();

let num = prompt("Give your number below 10 ");

for(let i=0;i<=num;i++){
    console.log(i);
}
    */

let name= "AMIT";
let revers=""
for (let i=name.length-1;i>=0; i--){
   revers+=name[i];
}
 console.log(revers);