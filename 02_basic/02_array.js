const m = ["thor" ,"iron-man" , "captain"] 
const dc = ["superman" ,"flash" ,"batman"]
m.push(dc)//it'll consider dc as object and insert in m instead of merging m and dc
console.log(m);
const a = m.concat(dc)//it'll merge m and dc but we have to store in new array of merged arr
console.log(a);

const t = [...m ,...dc]//it'll spread each ele and then merge
console.log(t);

const x =[1,2,3, [4,5,6],7, [9,8,[0,1]]]
const y = x.flat(Infinity)//spread all array in one array
console.log(y);

console.log(Array.isArray("Aliya"));//false
console.log(Array.from("Aliya"));//convert into array




