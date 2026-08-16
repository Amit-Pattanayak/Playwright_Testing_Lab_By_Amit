//MARK-1
/*
let a=56;
let b=78;
let c=a*b;

if (c>=4370){
    console.log("Number is greater than 4370");
}
else{
    console.log("Number is less than 4370");
    console.log("Increasing the number to 4370");
    for (let i=c; i<=4370; i++){
        console.log(i);

}

}
*/
//MARK-2
/*
a=5**2;
b=3**3;

if(a==b){
    console.log("a and b are equal");
}
else{
    console.log("a and b are not equal");
    console.log("Decreasing the b  number to make them equal");
    for(let i=b;i>=a;i--){
        console.log(i);
    }
}
    */

//MARK-3
/*
a=5**2;
b=25;
c=21+4;
console.log(a);
console.log(b);
console.log(c);

if ((a==b)&&(b==c)){
    console.log("a, b and c are equal");

}
else{
    console.log("a, b and c are not equal");

}
*/

//MARK-4(Reverse an array)
/*
let arr=[1,2,3,4,5,6,7,8,9];
for (let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}
*/

//MARK-5(Count even and odd numbers  )
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
//MARK6 (FIND A NUMBER IS MULTIPLE OF 5OR NOT)

// let num = prompt("Enter a number to check if it is multiple of 5 or not");
// if(num%5==0){
//     console.log(num+" is a multiple of 5");
// }
// else{
//     console.log(num+" is not a multiple of 5");
// }

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