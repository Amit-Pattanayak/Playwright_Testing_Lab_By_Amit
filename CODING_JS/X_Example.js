// MARK-1 (REVERSE AN ARRAY)
/*
let arr=[1,2,3,4,5,6,7,8,9];
let reverse=[];

for(let i=arr.length-1;i>=0;i--){
    reverse.push(arr[i]);
}
console.log(reverse);
*/


// MARK-2 (Reverse your name /Word)
/*

let name="AMIT";
let reverse="";

for(let i=name.length-1;i>=0;i--){
    reverse += name[i];
}
console.log(reverse);
*/

// MARK-3 (Count even and odd numbers)
/*
 let num=[21,25,28,42,896,85,47,56,38];

 for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        console.log(num[i] +'This is a even number');
    }
    else{
         console.log(num[i] +'This is a odd number');

    }
 }
*/
// MARK-4 (Use math operator to compare 3 number )
/*
 let a=5**2;
 let b=27+4;
 let c = 5*5;

 if((a==b)&&(b==c)){
    console.log("a,b & c are same")
 }
 else{
    console.log("a,b & c are  not same")
 }
*/

//MARK-5(Count the number of even and odd numbers in an array  )
/*
let num=[8, 45, 67, 89, 90, 23, 56, 78, 12, 34];
let even=0;
let odd=0;
for(let i=0;i<=num.length-1;i++){
    if(num[i]%2==0){
        console.log(num[i]+" is even number");
        even++;
    }
    else{
        console.log(num[i]+" is odd number");
        odd++;
    }
    
}
console.log(`Even: ${even}, Odd: ${odd}`);
*/
// MARK-6 (FIND A NUMBER IS MULTIPLE OF 5 OR NOT)
/*
let num=[8, 45, 67, 55, 90, 23, 50, 78, 15, 34];

for (let i = 0; i < num.length; i++) {
    if (num[i] % 5 === 0) {
        console.log(num[i] + " is a multiple of 5");
    }
    else{
       console.log(num[i] + " is Not a multiple of 5"); 
    }
}
 */
//MARK7 (FIND A NUMBER IS {Positive or Negative} and {Even or Odd})
/*
let num=[-12,-34,-45,67,89,90,-23,56,-78,52,34];

for(let i=0;i<num.length;i++){
    if(num[i]>0){
        console.log(num[i]+" is a positive number");
    }
    else{
        console.log(num[i]+" is a negative number");
    }
    if(num[i]%2==0){
        console.log(num[i]+" is an even number");
    }
    else{
        console.log(num[i]+" is an odd number");
    }
}
*/

//MARK8 (Make a system to find the Student grade based on the marks obtained in grade)
/*
let mark =[566, 200, 300, 450, 100];
for(let i=0;i<mark.length;i++){
    if(mark[i]>=500){
        console.log("Student has got A grade");
    }
    else if(mark[i]>=400 &&mark[i]<500){
        console.log("Student has got B grade");
    }
    else if(mark[i]>=300 &&mark[i]<400){
        console.log("Student has got C grade");
    }
    else if(mark[i]>=200 &&mark[i]<300){
        console.log("Student has got D grade");
    }
    else{
        console.log("Student has got F grade");
    }
}
    */
// MARK-9 (Print all even numbers from 1 to 100)
  /*
for (let i=0;i<=100;i++){
    if(i%2==0){
        console.log(i +"Its a Even number ")
    } 
    else{
        console.log(i +"Its a Odd number ")
    }
}

*/

// MARK-10 (Determine if a string is a palindrome )
/* 
let word = "Amit";
let reverse = "";

for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
}
console.log(reverse);
if(reverse==word){
    console.log("Its a Palindrome");
}
else{
console.log("Its not a Palindrome");
}
*/