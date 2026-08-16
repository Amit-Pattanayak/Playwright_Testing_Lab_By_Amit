
// Add something in the end of an array(PUSH)
/*
let marvelhero=['iron man','captain america','spiderman','antman'];
marvelhero.push('Dr Strange');
console.log (marvelhero);
*/
// Delete data from the end of an array(POP)
/*
let marvelhero=['iron man','captain america','spiderman','antman'];
marvelhero.pop();
console.log (marvelhero);
*/

// Add two array and make them one array (CONCAT)
/*
let marvelhero=['iron man','captain america','spiderman','antman'];
let dchero=['batman','superman','wonder women']

let heroes = marvelhero.concat(dchero);
console.log(heroes);
*/
// Add something in the starting of an array(UNSHIFT)
/*
let marvelhero=['iron man','captain america','spiderman','antman'];
marvelhero.unshift('Dr Strange');
console.log (marvelhero);
*/

// Return a piece of araay
/*
let hero=['iron man','captain america','spiderman','antman','bat man','superman'];
console.log(hero.slice(1,3));
*/

//Remove and replacxe value in an array 

let num=[1,2,3,4,5,6,7,8]
num.splice(2,2,11,22);
console.log(num);