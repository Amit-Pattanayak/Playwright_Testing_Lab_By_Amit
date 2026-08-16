//console.log ("Practice_2.js file is running");

//Print all even numbers from 1 to 100
/*for(let i=0; i<=100;i++){
    if(i%2==0){
        console.log(i +" is a even number");
    }
}
    */
//  TAKING INPUT FROM USER
/*
const prompt = require("prompt-sync")();

let num = prompt("Give me one number: ");
console.log("You entered:", num);
*/

/*MARK1(Prompt the user to enter their full name. Generate a username for them based on the input.
Start the username with @, followed by their full name, and ending with the full name length.)*/

const prompt = require("prompt-sync")();

let name = prompt("Give your first name ");
let str = name.length

console.log ("@"+name+str);