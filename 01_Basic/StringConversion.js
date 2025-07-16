console.log("1" + 1); // 11 ,here 1 is coerced int string "1"
console.log('1' + '1');//11
console.log('1' + 2 + 2);//12201_
console.log(1 + 2 + '2');//32(1+2)+'2'=32

console.log(true);//true
console.log(+true);//1
console.log(+"");//0

console.log(null > 0);//false -in case of relational operator, null converted to 0 and 0 is not greater than 0

console.log(null == 0); //false - in case of loosely equal to operator comparison , null is not coerced to 0 null converted to undefined or itself
console.log(null >= 0);// true reason > relational opr

console.log("2" === 2);//=== also check data type,and it will not convert data type

const s1 = Symbol("123");
const s2 = Symbol("123");

console.log(s1 == s2);//false








