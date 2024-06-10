// whenever you need something to be used multiple times in a code you create function for that function 
function sayMyname() {
    console.log("F");
console.log("L");
console.log("A");
console.log("P");
console.log("P");
console.log("Y");
}
sayMyname()  //sayMyname is reference : and () is execution 

function addTwonumbers(number1, number2) {
    let result = number1 + number2
    return result
}
const result = addTwonumbers(3,5)
console.log("Result:", result);


//understanding value return 
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("flaapy"));
