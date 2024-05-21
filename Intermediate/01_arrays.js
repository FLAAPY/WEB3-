// arrays

const Array = [1,2,3,4,5,6,7]
 const anything = ["flaapy", "flaapy2"]
 console.log(anything[1]);

 //array methods 

 Array.push(6) // will the mentioned element in the array 
 Array.push(10)
 Array.pop() // remove the last element of the array 
console.log(Array);

Array.unshift(9) // will add the following element in the starting position of the array 
console.log(Array);
Array.shift()
console.log(Array); // will remove the starting element 

// combining array's
 const newArray = Array.join()
console.log(newArray);
 console.log(typeof newArray);

// slice and spice 
console.log("A", Array);

const array1 = Array.slice(1,4)
console.log(array1);

console.log("B",Array);
const array2 = Array.splice(1,4)
console.log("C", Array);
console.log(Array);


