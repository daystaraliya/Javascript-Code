const balance = 123
console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));//123.00

const no = new Number(800.98765)
console.log(no);
console.log(no.toPrecision(3));//801
console.log(no.toPrecision(5));//800.99

const hundred = 1000000
console.log(hundred.toLocaleString());//1,000,000 a/q to american no system
console.log(hundred.toLocaleString('en-IN'));//10,00,000 a/q to indian number system
//maths property
console.log(Math.abs(-4));//convert -ve to +ve
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(9.4));
console.log(Math.min(4,3,1,9));
console.log(Math.random());//gives any random no btw 0 and 1
console.log(Math.random()*10);
console.log(Math.random()*10 +1);

const min = 10
const max =20
console.log(Math.floor(Math.random()*(max-min+1)));//give any 1 digit no btw 10 ND 20






