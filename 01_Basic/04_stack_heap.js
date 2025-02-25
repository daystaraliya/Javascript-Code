let name = "Aliya"
let secondName = name//it'll get copy of name

secondName = "tabassum"

console.log(name);
console.log(secondName);

//object
let userOne = {
    email:"wes@getComputedStyle.com",
    upi : "user.ybl"

}//allocate memory forr an object

let userTwo = userOne//get refrence of userOne

userTwo.email = "gdd@.com"
console.log(userOne.email);
console.log(userTwo.email);

