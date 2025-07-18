const user1 = {
  usern: "Alia",
  price: 122,

  welcomeMsg: function () {
    console.log(`${this.usern} , welcome to website`); //this refers to current context,it means current usern
    console.log(this);// this refers to current context , here this refers to whole object user1


  }
}
user1.welcomeMsg(); // firstly alia is usern ,so this refers to alia
user1.usern = "sam", // usern name changed
  user1.welcomeMsg();// now this will refers to usern ->sam

console.log(this);//this refers to empty object in node environment platform but in browser it globally refers to the window object

function one() {
  console.log(this); // now there lots of things refers by this inside function

}
one();
