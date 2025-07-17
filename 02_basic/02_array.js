const m = ["thor", "iron-man", "captain"]
const dc = ["superman", "flash", "batman"]
//m.push(dc)//it'll consider dc as object and insert in m instead of merging m and dc
//console.log(m);
const a = m.concat(dc)//it'll merge m and dc but we have to store in new array of merged arr and it will return new array
console.log(a);


const arr = ["A", "B", "C"];
//spread Operator
const t = [...m, ...dc, ...arr]//it'll spread each ele and then merge
console.log(t);
console.log(typeof t);


const x = [1, 2, 3, [4, 5, 6], 7, [9, 8, [0, 1]]]
const y = x.flat(Infinity)//spread all array in one array
console.log(y);

console.log(Array.isArray("Aliya"));//false
console.log(Array.from("Aliya"));//convert into array

let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1, s2, s3));//it will merge varaible and  create an array






