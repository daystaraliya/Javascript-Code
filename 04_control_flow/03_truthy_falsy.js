//truth and falsy value
// const email = "qwert@.com"
// if(email) { 
//     console.log(`user emai is: ${email}`);//if we give email the if block will be executed
    
// }
// else {
//     console.log(`Don't have user email`);//if we don't give email then else block executes
    
// }

//in this case there is no comparison within if statement,this type of value passing is called truthy and Falsy value
//Falsy values are : false , 0 ,-0,BigInt(0n),null,undefined,NaN
//truthy value are : except these falsy value are all truth and "0",'false'," ",[].{},function(){}

const username = []
//To check array is empty
if (username.length === 0) {
    console.log(`array is empty`);   
}

//To check object is empty
const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log(`object is empty`);
    
}