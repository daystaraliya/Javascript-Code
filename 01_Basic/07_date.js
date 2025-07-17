let myDate = new Date()//type of myDate is object
console.log(myDate); // not in readable format
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(myDate.getDay());//returns the day of week
console.log(typeof (myDate));//object time

let today = new Date(2025, 0, 17)
console.log(today.toDateString());
console.log(today.toLocaleString());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getTime());//give in milisecond




