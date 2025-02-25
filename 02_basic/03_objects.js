
//object literals
const mySym = Symbol("key1")
const x = Symbol("key2")
const user1 = {
    name : "Aliya",
    email:"srg@j.com",
    password:"234",
    isLogged : false,
    mySym :"myKey1",//not better approach of using symbol
    [x] : "myKey2"//correct syntax of using symbol

}
console.log(user1);
console.log(user1.isLogged)//to access value
console.log(user1["email"]);//again way to access value

console.log(user1.mySym);//it will print value of mySym it's give data type as String
console.log(typeof user1.mySym);
console.log(user1[x]);//correct way of using symbol
console.log(typeof user1[x]);//string

user1.greetingOne = function() {
    console.log("Hello JS users");
    
}
console.log(user1.greetingOne());

user1.greetingTwo = function() {
    console.log(`hello , ${this.name}`);
    
}
console.log(user1.greetingTwo());

