const flaapy_heros = ["flaapy1","flaapy2","flaapy3"]
const flaapy_enemies = ["flaapy100","flaapy99","flaapy98"]
 
flaapy_heros.push(flaapy_enemies)
console.log(flaapy_heros);// push uses the existing array only 

flaapy_heros.concat(flaapy_enemies) //returns a new array 
const all_members = flaapy_heros 
console.log(flaapy_heros);

const all_members2 = [...flaapy_heros,...flaapy_enemies]
console.log(all_members2); //using spread operator 

//incase you have sub arrays 
const array = [1,2,3,4,5,[6,7,8],9,10,11,[12,13,[14,15,16]]]
const another_Array = array.flat(Infinity)
console.log(another_Array);

 //conversion 
 console.log(Array.isArray("Flaapy"));
 console.log(Array.from("Flaapy")); // coverting to a array

 //another example to convert to a array 
 let score1 = 100
 let score2 = 200 
 let score3 = 300 
console.log(Array.of(score1,score2,score3)); // will convert the score to the array 

