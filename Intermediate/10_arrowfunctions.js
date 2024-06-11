const user = {
    username : "flaapy",
    price: 299,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this); //if we print this outside this scope it will return {} empty object
    }
}
user.welcomeMessage() 
user.username = "flaapy2"  //now the current context is changed so the username will also be changes accordingly 
user.welcomeMessage()


function flaapy() {
    console.log(this);
    
}
flaapy()


//+++++ arrow 
const flaapy2 = () => {
    let username = "flaapy"
    console.log(this); // will return {}
}
flaapy2()

// method to declare arrow function 
//+++++++++++EXPLICIT return 
const addTwo = (num1,num2) => {
    return num1 + num2
}
// {} is use this it is must to use return , but in case on () there's no need 
/// +++++++ OR ++++++ using implicit return 
const add2 = (num1 + num2) => num1 + num2

console.log(add2(3,4));