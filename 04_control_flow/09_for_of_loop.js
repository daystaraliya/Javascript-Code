//for of loop
const obj = [1, 2, 3, 4, 5, 6];

for (const val of obj) {
  console.log(val);

}

const greetings = "Hello";

for (const greet of greetings) {
  console.log(`Each char is ${greet}`);

}

//iteration on object is different , it cannot iterate by forOf loop,it will be iterate by forIn loop and forIn loop doesn't work on map as map is not iterable
const myObj = {
  'games1': 'NFS',
  'games2': 'Spiderman',
  'games3': 'Asphalt',
  'games4': 'tic-tac',
}
for (const key in myObj) {
  //console.log(key); // to extract key in onject
  //console.log(myObj[key]); // to extract value in object
  console.log(`${key} refer to  ${myObj[key]}`);


}