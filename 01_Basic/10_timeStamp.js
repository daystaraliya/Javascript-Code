let myTimeStamp = Date.now();

let myCreatedDate = new Date("17-07-2025")

console.log(myTimeStamp); //not readable and retun it in millisencod from now which is too lengthy

console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));//give in second from right now, divided by 100 to remove decimal digit


