//add prices of items in shopping cart 

const cart = [
  {
    item1: "dress",
    price: 2000,
  },
  {
    item2: "Jeans",
    price: 990,
  },
  {
    item3: "Co-ord",
    price: 2129,
  },
  {
    item4: "Bra",
    price: 1249,
  },
  {
    item1: "Top",
    price: 219,
  },
]

const totalAmount = cart.reduce((acc, item) => item.price + acc, 0)
console.log(totalAmount);
