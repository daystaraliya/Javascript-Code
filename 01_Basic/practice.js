const name = "Aliya";
const no = 50;

const fname = "Sana";
const lname = "Meraj";

const x = new String("A String Object");
console.log(x)
console.log(typeof (x))//object
console.log(x instanceof String);
console.log(name + no + "tabassum");

console.log(`${name} $tabassum`)

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.substring(0, 3))
console.log(name.charAt(3));
console.log(name.indexOf("l"));

const str = "Hello , What's going on?";

console.log(str.includes("Hello"));//Checks given string is present or not

console.log(str.split(" "));// splits a string into an array of substring based on a separator like ",", " " etc

console.log(str.slice(0, 9));//extract charaters from 0 to 8

console.log(str.slice(-1, 10));//-ve parameter refers to start from ending index 
console.log(str.slice(-5, -15));












