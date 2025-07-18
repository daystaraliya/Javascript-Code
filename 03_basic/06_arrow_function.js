//in arrow function, 'this' keyword is undefined

//arrow function without parameter
const one = () => {
  let username = "Aliya";
  console.log(this.username);// output will be undefined
  console.log(this); //output will be empty object
  console.log(username);

}
one();

// arrow function with parameter
const addtwo = (n1, n2) => {
  return n1 + n2;
}
console.log(addtwo(2, 3));


//implit return in arrow function,it means you don't need to user curly braces if you write code in same line and don't use retun keyword
//value return
const addthree = (n1, n2, n3) => (n1 + n2 + n3);
console.log(addthree(1, 4, 9));

//object return
const objectUser = () => ({ usename: "aliya", email: "ali@gmail.com", price: 122 })
console.log(objectUser());

