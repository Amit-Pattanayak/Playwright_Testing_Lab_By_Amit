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
/*
const prompt = require("prompt-sync")();

let name = prompt("Give your first name ");
let str = name.length

console.log ("@"+name+str);
*/

//MARK2(FOR AN GIVEN ARREAY OF MARK FIND THE AVG. OF IT)
/*
let mark =[78,85,96,38,58,65]
let len= mark.length;
let tot=0;
for(let i=0;i<mark.length;i++){
    tot=tot+mark[i];
    
}
let avg=tot/len
console.log(avg);
*/
// MARK3(FOR A ARAY OF 5 ITEMS FIND THE 10% DISCOUNT AND SAVE THE DISCOUNTED ITEM IN A ARRAY)
/*
let price=[200,250,300,350,400]
let dis=0
let finalprice=[];
for (let i=0;i<price.length;i++){
    dis=price[i]*0.1;
   finalprice[i]= price[i]-dis


}
console.log("final price after discount is "+finalprice);
*/

let amnt=[100,200,300,400,500]
let dis=0;
for(let i=0;i<amnt.length;i++){
    dis=amnt[i]*0.1;
    amnt[i]=amnt[i]-dis;
}
console.log(amnt);