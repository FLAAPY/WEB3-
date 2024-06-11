//cart items usecase 
function calculateCartprice(...num1){ //rest operator 
    return num1
}
console.log(calculateCartprice(200,300,400));

const user = {
    username: "flaapy",
    price: 299
}
function handleobject (anyobject){
    console.log(`Username is ${anyobject.username} and the price is ${anyobject.price}`);

}

const myArray = [200,300,400,500]
function returnSecondvalue(getarray) {
    return getarray[1]
    
}
console.log(returnSecondvalue(myArray));