// strings can be declared in variables 
const name = "FLAAPY-to-moon"
const pointNumber = "007" // without "" if you put 007 00 would be neglected 

console.log(name + pointNumber)

// modern way to write the same thing 
console.log(`Hello my name is ${name} and my point is ${pointNumber}}`); // string interpolation

// another way to define a string 
const newName = new String('Flaapy-007')
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.toLowerCase());
console.log(newName.charAt(4));
console.log(newName.indexOf('y'));

const newString = newName.substring(0,5) //-ve value are ignored and start from zero 
console.log(newString);

const anotherString = newName.slice(-10,5)
console.log(anotherString);

const anotherString1 = "  flaapy  "
console.log(anotherString1);
console.log(anotherString1.trim()); // this removes any extra characters in the string . trim fucntion uses both trim start and end both . else both can be used differently

const url = "https://flaapy.com/flaapy%20tomoon"
console.log(url.replace('%20', '-'));
console.log(url.includes('flaapy'));

console.log(name.split('-'));