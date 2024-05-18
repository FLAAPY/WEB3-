
//stack memory (Primitive Data types | heap memory (non-primitive datat type)
// stack memory will provide you with a copy so a any change in copy wont effect the original value
// heap value will provide you with a roginal reference so any change will effect the original value

// stack example 
let myName = "Flaapy"
let myName1 = myName
myName1 = "flaapy god"

console.log(myName1);
console.log(myName);

//heap example
let userOne = {
    name: "flaapy",
    email: "flappytomoon@gmail.com"
}

let userTwo = userOne

userTwo.email = "flaapyonearth@gmail.com" //.email to access the properties of the object

console.log(userOne.email);
console.log(userTwo.email);