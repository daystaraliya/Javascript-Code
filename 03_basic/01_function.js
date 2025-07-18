


function loginUser(userName) {
    if (!userName) {
        return `please enter usename`
    }
    return `${userName} just logged in`
}
//console.log(loginUser());//itll give undefind
//console.log(loginUser("Aliya"));

function loggedUser(username = "sam") {
    if (!username) {//it ill never be true bcoz username have initialised value sam
        console.log("please enter a  username");

    }
    else {
        return `${username} is logged in`
    }
}

console.log(loggedUser());

function calCartPrice(...num) { //use rest operator to take mulltiple values and it will return array of all numbers
    return num
}
//console.log(calCartPrice(5));
//console.log(calCartPrice(3,5,7));

function name(val1, val2, ...num1) {
    return num1
}
//console.log(name(3,5,7,9,0));

const user = {
    username: "aliya",
    price: 1999
}
function handleObjectUser(anyObject) {
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);

}
//handleObjectUser(user)//function call
handleObjectUser({      //passing direct object
    username: "joe",
    price: 899
})
//accessing array value by function
const myNewArr = [300, 600, 100, 400]
function returnSecondValue(getArray) {
    return getArray[1]
}
console.log(returnSecondValue(myNewArr));
