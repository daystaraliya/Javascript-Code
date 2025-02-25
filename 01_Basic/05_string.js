let name = "Aliya"
let no = 32

console.log(`Hey, my name is ${name} and my address is ${no}`);

console.log(`Hey, my name is ${name.toUpperCase()} and my address is ${no}`);

const str = new String("myphoneisnice")//new way to initialize string in which we get lots of method to use
console.log(str);
console.log(str[5]);
console.log(str.__proto__);//to get object

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.charAt(5));
console.log(str.indexOf('n'));

const str1 = new String('Aliya Tabassum')
console.log(str1.substring(0,5));

console.log(str1.slice(1,-10));

console.log(str1.trim());//removes starting and ending space

const str2 = new String(" aliya ")
console.log(str2.trim());
const url = "http//qwerty@.comqwert%20qwerty"
console.log(url.replace("%20" , "-"));
console.log(url.includes('qwert'));
console.log(url.includes('nhfdh'));
const str3 = "hii this is venom"
console.log(str3.split(' '));









