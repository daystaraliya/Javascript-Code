// Nullish coaliscing Operator (??): null undefind

let val1;
val1 = 5 ?? 10;

console.log(val1);

let val2;
val2 = null ?? 10;
console.log(val2);

let var3;
var3 = undefined ?? 14;
console.log(var3);

let var4 = null ?? 10 ?? 20;
console.log(var4);

//terniary operator
//condition ? true statement : false statement

const icePrice = 100;
icePrice >= 80 ? console.log("More than 80") : console.log(`less than 100`);

