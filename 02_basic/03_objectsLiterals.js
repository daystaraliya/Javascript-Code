// sigleton is made by constructor not by literals. here we r reading object literals
const jsUser = {}; //empty array


//Symbol is also a type of datatype. A symbol is unique and immutable primitive value and may be used as a key of object. 

const mySym = Symbol("key1")// way to declare symbol datatype
const x = Symbol("key2")

const user1 = {
    name: "Aliya",
    "full name": "Aliya Tabassum",
    email: "srg@j.com",
    password: "234",
    isLogged: false,
    mySym: "myKey1",//not better approach of using symbol and it type will be string not symbol.
    [x]: "myKey2"//correct syntax of using symbol and type will be symbol

}

console.log(user1);
console.log(user1.isLogged)//to access value but not good practice becouse you cannot acces full name by this method
//console.log(user1.full name);

console.log(user1["email"]);//again way to access value ,this is good practice

console.log(user1["full name"]);

user1.name = "Tabassum"; // way to change value within object
console.log(user1.name);

Object.freeze(user1.name);//after freezing object we cannot change in the value, sofia will be propagate bcoz I have freeze object 
user1.name = "Sofia";
console.log(user1);


console.log(user1.mySym);//it will print value of mySym it's give data type as String

console.log(typeof user1.mySym);
console.log(user1[x]);//correct way of using symbol
console.log(typeof user1[x]);//string

user1.greetingOne = function () {
    console.log("Hello JS users");

}
console.log(user1.greetingOne());

user1.greetingTwo = function () {
    console.log(`hello , ${this.name}`);

}
console.log(user1.greetingTwo());

