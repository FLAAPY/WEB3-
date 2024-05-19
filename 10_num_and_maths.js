const balance1 = 6753
console.log(balance1);

const balance2 = new Number(6753.445) //specifically defining that we want number only 
console.log(balance2); 

// now lets try to change this into string to unlock properties of strings

console.log(balance2.toString().length);
console.log(balance2.toFixed(2)); // how many digits we want after decimal

const balance3 =  123.863
console.log(balance3.toPrecision(3)); // precision value

// ________________________Maths(inbuilt in JS)___________________________________

console.log(Math);
console.log(Math.abs(-456)) // covert to positive value 
console.log(Math.round(4.6));
console.log(Math.ceil(4.6)); // round off to maximum 
console.log(Math.floor(4.6)); // round off to minimum 
console.log(Math.min(1,2,3,4,5,6,7,8,9));
console.log(Math.max(1,2,3,4,5,6,7,8,9));

console.log(Math.random()); // generate random value between 0 and 1 
console.log(Math.random()*10 + 1); // value will come above 1 
console.log(Math.floor(Math.random()*10 + 1 )); // will generate definetely an integer 

// Different approach 
const min = 10 
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1)) + min); // generic formula !!!


